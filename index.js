const express = require('express')
const app = express()
const moviesRouter = require("./routes/movies")

//view ENV
require('dotenv').config()

const PORT = process.env.PORT || 3306

app.use(express.json())

app.use("/", moviesRouter)



//get all movies


// //get a user by ID
// app.get("/users/:id", (req, res) => {
//     const {id} = req.params
//     pool.query(`SELECT * FROM ?? WHERE ?? = ?`, 
//     ["users", "id", id], 
//     (err,row,fields) => {
//         res.json(row)
//     })
// })

// //create a user
// app.post("/users", (req, res) => {
//     const {body} = req
//     const {first_name, last_name} = body

//     pool.query(`INSERT INTO ?? (??, ??) VALUES (?, ?)`,
//     ["users", "first_name", "last_name", first_name, last_name],
//     (err,row,fields) => {
//     console.log(row)
//     res.json({
//         message: `Successfully inserted user into id: ${row.insertId}`
//     })
//     })
// })


// //update user
// app.put("/users/:id", (req, res) => {
//     const {body} = req
//     const {id} = req.params
//     // const {first_name, last_name} = body


//     pool.query(`UPDATE ?? set ? WHERE ?? = ?`, 
//     ["users",body, "id", id],
//     (err,row,fields) => {
//     console.log(err,row, fields)
    
//     res.json(row.info)
//     })
// })


// app.delete("/users/:id", (req, res) => {
//     const {body} = req
//     const {id} = req.params
//     // const {first_name, last_name} = body


//     pool.query(`DELETE from ?? WHERE ?? = ?`, 
//     ["users","id", id],
//     (err,row,fields) => {
//     console.log(err,row, fields)
    
//     res.json(row.info)
//     })
// })


app.listen(PORT, () => console.log(`I am listening on port ${PORT}`))
