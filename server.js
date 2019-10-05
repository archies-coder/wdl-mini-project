const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const sql = require('./db')
const options = require('./app/config/keys')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const path = require('path')

// const { Client } = require('pg');

// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
// });


const app = express();      
app.use(bodyparser.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const sessionStore = new MySQLStore({},client);
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge : 365*24*60*60*1000
    }
}));

app.get('/',(req,res)=>{
    // if (!req.session.userId){
    //     return res.redirect('/login')
    // }
    sql.query('SELECT * FROM users;',(error, response)=>{
        res.send(response)
    })
})

// app.get('/logout',(req,res)=>{
//     console.log('logging out')
//     req.session.destroy()
//     res.redirect('/login')
// })

// app.use(require('./app/routes/login.route'))
// app.use(require('./app/routes/doctors.route'))
// app.use(require('./app/routes/patients.route'))
// app.use(require('./app/routes/appointments.route'))


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log(`App listening at port ${PORT}`))