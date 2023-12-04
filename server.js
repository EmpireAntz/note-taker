//Imports the express module
const express = require('express')
//Initialize the express application
const app = express()
//Sets the port number
const PORT = process.env.PORT || 3001
//Imports the API routes
const apiRoutes = require('./routes/apiRoutes')
//Imports the html routes
const htmlRoutes = require('./routes/htmlRoutes')
//Apply middleware to parse the body of incoming requests
app.use(express.json())
//URL encoded middleware
app.use(express.urlencoded({extended: true}))
//Serves static files from the public directory
app.use(express.static('public'))
//uses the API routes in the application with the prefix /api
app.use('/api', apiRoutes)
//Uses the html routes on the application
app.use('/', htmlRoutes)
//Starts the server on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

