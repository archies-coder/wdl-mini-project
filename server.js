const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'testing1'
})

connection.connect(()=>{
    console.log('connected to db')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log(`App listening at port ${PORT}`))