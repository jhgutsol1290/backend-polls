const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes')

require('./db')


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())
app.use(routes)

app.listen(port, () => console.log(`Server on port ${port}`))