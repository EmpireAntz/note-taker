const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public.index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
