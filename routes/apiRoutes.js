//Imports the express module
const express = require('express')
//Creates a router 
const router = express.Router()
//Imports the file system module
const fs = require('fs')
//Imports the path module for handling and transforming file paths
const path = require('path')
//Import the uuid module to generate unique ids
const { v4: uuidv4 } = require('uuid')
//Route for handling GET requests to /notes
router.get('/notes', (req, res) => {
    //Reads the db.json file and returns its content as JSON
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        //If there is an error reading the file, throw an error
        if (err) throw err
        //Parses the data from db.json and sends it as a JSON response
        res.json(JSON.parse(data))
    })
})
//Route for handling POST requests to /notes
router.post('/notes', (req, res) => {
    //Creates a new note with the request body and a unique ID
    const newNote = { ...req.body, id: uuidv4() }
    //Reads the current notes, adds the new note, and then writes the updated array to db.json
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        //If there is an error reading the file, throw an error
        if (err) throw err
        //Parses the existing notes into an array
        const notes = JSON.parse(data)
        //Adds the new note the array
        notes.push(newNote)
        //Writes the updated notes array to db.json
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
        //If there is an error reading the file, throw an error
        if (err) throw err
        //Sends the new note as a JSON response
        res.json(newNote)
        })
    })
})
//Route for handling DELETE requests to '/notes/:id'
router.delete('/notes/:id', (req, res) => {
    //Extracts the note ID from the request parameters
    const noteId = req.params.id
    //Reads the current notes, removes the note with the given ID, and then writes the updated array to db.json
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        //If there is an error reading the file, throw an error
        if (err) throw err
        //Parses the existing notes into an array
        let notes = JSON.parse(data)
        //Filters out the note with the given ID
        notes = notes.filter(note => note.id !== noteId)
        //Writes the updated notes array to db.json
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
        //If there is an error reading the file, throw an error
        if (err) throw err
        //Sends a success message as a JSON response
        res.json({ msg: 'Note deleted successfully' })
        })
    })
})
 //Exports the router so it can be used in the express application
  module.exports = router