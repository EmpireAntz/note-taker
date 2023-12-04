//Imports the express module
const express = require('express')
//Imports the path module for handling and transforming file paths
const path = require('path')
//Creates a router 
const router = express.Router()
//Defines a route for the root path to serve the main index.html file
router.get('/', (req, res) => {
    //Sends the index.html file located in the public directory to the client
   res.sendFile(path.join(__dirname, '../public.index.html'))
})
//Defines a route for the /notes path to serve the notes.html file
router.get('/notes', (req, res) => {
    //Sends the notes.html file located in the public directory to the client
   res.sendFile(path.join(__dirname, '../public/notes.html'))
})
//Exports the router so it can be used in the express application
module.exports = router