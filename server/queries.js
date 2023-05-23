// /server/queries.js

require('dotenv').config();

// connect to postgres using the node-postgres package
const { Pool } = require('pg');

const pool = new Pool({
  user: 'bc',
  host: 'localhost',
  database: 'api',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// create a new link in the db
const createLink = async (request, response) => {
  try {
    const { name, url, category } = request.body;

    if (name && url && category) {
      const query = 'INSERT INTO links (name, URL, category) VALUES ($1, $2, $3) RETURNING id';
      const values = [name, url, category];
      const result = await pool.query(query, values);

      response.status(201).send(`Link added with ID: ${result.rows[0].id}`);
    } else {
      response.status(403).send("Server is expecting data object with a name, URL, and category parameter!");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Server encountered an error while creating the link.");
  }
};

// read all data from db
const getLinks = async (req, res) => {
  try {
    const query = 'SELECT * FROM links ORDER BY id ASC';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server encountered an error while retrieving the links.");
  }
};

const getLinkByID = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = 'SELECT * FROM links WHERE id = $1';
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server encountered an error while retrieving the link.");
  }
};

const getLinksByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const query = 'SELECT * FROM links WHERE category = $1';
    const result = await pool.query(query, [category]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server encountered an error while retrieving the links by category.");
  }
};

// update link in the db
const updateLink = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, url, category } = req.body;

    const query = 'UPDATE links SET name = $1, url = $2, category = $3 WHERE id = $4';
    const values = [name, url, category, id];
    await pool.query(query, values);

    res.status(200).send(`Link modified with ID: ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server encountered an error while updating the link.");
  }
};

// delete link in the db
const deleteLink = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = 'DELETE FROM links WHERE id = $1';
    await pool.query(query, [id]);

    res.status(200).send(`Link deleted with ID: ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server encountered an error while deleting the link.");
  }
};

module.exports = {
  createLink,
  getLinks,
  getLinkByID,
  updateLink,
  deleteLink,
  getLinksByCategory,
};
