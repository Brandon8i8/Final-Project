// import express
const express = require("express")

// define a PORT for our server to run
const PORT = 8000

// initialize express application
const app = express()

// define some routes
app.get('/', (req, res) => {
 res.send("Hey don't forget we're testing route /api")
})
app.get('/api', (req, res) => {
 // send message back to client
 res.json({ message: 'Yo yo from the server!' })
})

// start app at PORT
app.listen(PORT, () => {
 console.log(`Server is listening on PORT ${PORT}`)
})
