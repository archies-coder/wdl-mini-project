// const mysql = require('mysql')
// const options = require('./app/config/keys')

// const connection = mysql.createConnection(options)


// connection.connect( (err) => {
//     if (err) throw err
//     console.log('You are now connected...')

//     connection.query(`create table if not exists users(
//             id INT AUTO_INCREMENT,
//             email VARCHAR(255),
//             password VARCHAR(255),
//             PRIMARY KEY(id)
//         );`, err=>{ if (err) throw err })
        
//     connection.query(`CREATE TABLE IF NOT EXISTS doct (
//         dno int(11) NOT NULL AUTO_INCREMENT,
//         dname varchar(30) NOT NULL,
//         dspec varchar(30) NOT NULL,
//         dshow varchar(1) NOT NULL DEFAULT 'Y',
//         PRIMARY KEY (dno),
//         UNIQUE(dname)
//     );`,(err)=>{
//         if (err) throw err
//     })

//     connection.query(`CREATE TABLE IF NOT EXISTS patient (
//         pno int(11) NOT NULL AUTO_INCREMENT,
//         pname varchar(30) NOT NULL,
//         paddr varchar(30) NOT NULL,
//         psex varchar(1) NOT NULL,
//         pshow varchar(1) NOT NULL DEFAULT 'Y',
//         UNIQUE(pname),
//         PRIMARY KEY (pno)
//     );`, err=>{ if (err) throw err })

//     connection.query(`CREATE TABLE IF NOT EXISTS appt (
//         ano int(11) NOT NULL AUTO_INCREMENT,
//         adoctor int(11) NOT NULL,
//         apatient int(11) NOT NULL,
//         atime varchar(11) NOT NULL,
//         ashow varchar(1) NOT NULL DEFAULT 'Y',
//         adate date NOT NULL,
//         UNIQUE(adoctor),
//         PRIMARY KEY (ano)
//     );`, err=>{ if (err) throw err })
//     })
    

// module.exports = connection