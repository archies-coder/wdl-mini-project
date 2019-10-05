// const mysql = require('mysql')
// const options = require('./app/config/keys')
const { Client } = require('pg');

// const client = mysql.createConnection(options)


const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect( (err) => {
    if (err) throw err
    console.log('You are now connected...')

    client.query(`create table if not exists users(
            id SERIAL,
            email VARCHAR(255),
            password VARCHAR(255),
            PRIMARY KEY(id)
        );`, err=>{ if (err) throw err })
        
    client.query(`CREATE TABLE IF NOT EXISTS doct (
        dno SERIAL,
        dname varchar(30) NOT NULL,
        dspec varchar(30) NOT NULL,
        dshow varchar(1) NOT NULL DEFAULT 'Y',
        PRIMARY KEY (dno)
    );`,(err)=>{
        if (err) throw err
    })

    client.query(`CREATE TABLE IF NOT EXISTS patient (
        pno SERIAL,
        pname varchar(30) NOT NULL,
        paddr varchar(30) NOT NULL,
        psex varchar(1) NOT NULL,
        pshow varchar(1) NOT NULL DEFAULT 'Y',
        PRIMARY KEY (pno)
    );`,err=>{ 
        if (err) throw err 
    })

    client.query(`CREATE TABLE IF NOT EXISTS appt (
        ano SERIAL,
        adoctor integer NOT NULL,
        apatient integer NOT NULL,
        atime varchar(11) NOT NULL,
        ashow varchar(1) NOT NULL DEFAULT 'Y',
        adate date NOT NULL,
        PRIMARY KEY (ano)
    );`, err=>{ if (err) throw err })
    })
    
module.exports = client