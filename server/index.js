// /server/index.js

// import express
const express = require("express")

// import path module
const path = require('path')

const db = require('./queries')

// initialize express application
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// define a PORT for our server to run
const PORT = 8000

// define some routes
app.get('/', (req, res) => {
 res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})


// CRUD:

// CREATE
app.post('/links', db.createLink)

// READ
app.get('/links', db.getLinks)
app.get('/links/:id', db.getLinkByID)
app.get('/links/category/:category', db.getLinksByCategory)

// UPDATE
app.put('/links/:id', db.updateLink)

// DELETE
app.delete('/links/:id', db.deleteLink)

// start app at PORT
app.listen(PORT, () => {
 console.log(`Server is listening on PORT ${PORT}`)
})
