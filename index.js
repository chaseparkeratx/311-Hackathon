const express = require('express')
const app = express()
const moviesRouter = require("./routes/movies")

//view ENV
require('dotenv').config()

const PORT = process.env.PORT || 3306

app.use(express.json())

app.use("/", moviesRouter)





app.listen(PORT, () => console.log(`I am listening on port ${PORT}`))
