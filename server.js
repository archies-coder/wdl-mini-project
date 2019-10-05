const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const sql = require('./db')
const {dbURI, SECRET} = require('./app/config/keys')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, ()=>{
    console.log('connected to mongo database')
})

const app = express();      
app.use(bodyparser.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// const sessionStore = new MySQLStore({},client);
const options = {
    url: dbURI,
    ttl: 365 * 24 * 60 * 60,
}
app.use(session({
    store: new MongoStore(options),
    secure: process.env.NODE_ENV === 'production',
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
    },
}));

app.get('/',(req,res)=>{
    if (!req.session.userId){
        return res.redirect('/login')
    }
    return res.redirect('/dlist')
})

app.get('/logout',(req,res)=>{
    console.log('logging out')
    req.session.destroy()
    res.redirect('/login')
})

app.use(require('./app/routes/login.route'))
app.use(require('./app/routes/doctors.route'))
app.use(require('./app/routes/patients.route'))
app.use(require('./app/routes/appointments.route'))


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log(`App listening at port ${PORT}`))