require('dotenv').config()
const cors = require('cors')
console.log(__dirname)
const express = require('express')
const app = express()
app.use(cors())
app.use(express.static(__dirname + '/public'))
const { Pool } = require('pg')


const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST, 
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

app.post('/recipes', (req, res) => {
    const recipes = {
        text: `INSERT INTO Recipes (picture) VALUES ($1) RETURNING *`,
        values: []
    }
    pool.query(recipes).then((data) => res.json(data))
    .catch((err)=> res.sendStatus(500))
})

app.get('/recipes', (req,res) => {
    pool.query("SELECT * FROM Recipes")
    .then((data) => res.json(data.rows))
    .catch((err) => res.sendStatus(500))
})

app.get('/', (req, res) => {
    res.send('HI')
})

app.listen(4000, () => {
    console.log('hi')
})