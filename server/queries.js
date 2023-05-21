// connect to postgres using the node-postgres package
const POOL = require('pg').Pool

const pool = new POOL({
 user: 'bc',
 host: 'localhost',
 database: 'api',
 password: '@Thetoontownclown888',
 port: 5432,
})

// create all functions that will be our request handlers in our express server

// create a new link in the db

// read all data from db
const getLinks = (req, res) => {
 pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
  if (error) {
   throw error;
  }
  res.status(200).json(result.rows)
 })
}

// update link in the db

// delete link in the db

module.exports = {
 getLinks,
}