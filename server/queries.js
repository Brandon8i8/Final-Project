// /server/queries.js

require('dotenv').config()

// connect to postgres using the node-postgres package
const POOL = require('pg').Pool

const pool = new POOL({
 user: 'bc',
 host: 'localhost',
 database: 'api',
 password: process.env.POSTGRES_PASSWORD,
 port: 5432,
})

// create all functions that will be our request handlers in our express server

// create a new link in the db
const createLink = (request, response) => {
 // take data the user passes us and insert it into our table
 const name = request.body.name
 const url = request.body.url

 if (name && url) {
  pool.query(
   'INSERT INTO links (name, URL) VALUES ($1, $2)', 
   [name, url], 
   (error, results) => {
    if(error) {
     throw error
    }
    console.log(results)
    response.status(201).send(`Link add with ID: ${results.insertId}`)
   },
  )
 } else {
  response.status(403).send("Server is expecting data object with a name and URL parameter!")
 }

}

// read all data from db
const getLinks = (req, res) => {
 // get back all the data currently in the database
 pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
  if (error) {
   throw error;
  }
  res.status(200).json(result.rows)
 })
}

const getLinkByID = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM links WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
}

// update link in the db
const updateLink = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, url } = req.body;

  pool.query(
    "UPDATE links SET name = $1, url = $2 WHERE id = $3",
    [name, url, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Link modified with ID: ${id}`);
    }
  );
};

// delete link in the db
const deleteLink = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "DELETE FROM links WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Link deleted with ID: ${id}`);
    }
  );
};

module.exports = {
 createLink,
 getLinks,
 getLinkByID,
 updateLink,
 deleteLink,
}