// import express
const express = require("express")

// initialize express application
const app = express()

// import path module
const path = require('path')

const db = require('./queries')

// define a PORT for our server to run
const PORT = 8000

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// define some routes
app.get('/', (req, res) => {
 res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})


// CRUD
// CREATE

// READ
app.get('/links', db.getLinks)
app.get('/links/:id',db)

// UPDATE

// DELETE

// start app at PORT
app.listen(PORT, () => {
 console.log(`Server is listening on PORT ${PORT}`)
})
