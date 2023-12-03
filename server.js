//Imports the express module
const express = require('express')
//Imports the path module for handling and transforming file paths
const path = require('path')
//Initialize the express application
const app = express()
//Sets the port number
const PORT = process.env.PORT || 3001
//Imports the API routes module
const apiRoutes = require('./routes/apiRoutes')
//Apply middleware to parse the body of incoming requests
app.use(express.json())
//URL encoded middleware
app.use(express.urlencoded({extended: true}))
//Serves static files from the public directory
app.use(express.static('public'))
//uses the API routes in the application with the prefix /api
app.use('/api', apiRoutes)
//Defines a route for the root path to serve the main index.html file
app.get('/', (req, res) => {
     //Sends the index.html file located in the public directory to the client
    res.sendFile(path.join(__dirname, '/public.index.html'))
})
//Defines a route for the /notes path to serve the notes.html file
app.get('/notes', (req, res) => {
     //Sends the notes.html file located in the public directory to the client
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})
//Starts the server on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

