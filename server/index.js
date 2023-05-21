// import express
const express = require("express")

// import path module
const path = require('path')

// define a PORT for our server to run
const PORT = 8000

// initialize express application
const app = express()

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// define some routes
app.get('/', (req, res) => {
 res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})
app.get('/api', (req, res) => {
 // send message back to client
 res.json({ message: 'Yo yo from the server!' })
})

// start app at PORT
app.listen(PORT, () => {
 console.log(`Server is listening on PORT ${PORT}`)
})
