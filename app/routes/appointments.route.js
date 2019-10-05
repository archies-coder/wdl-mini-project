// const express = require('express')
// const router = express.Router()
// const path = require('path')
// const sql = require('../../db')

// router.get('/appts', (req, res, next) => {
//     if (!req.session.userId) {
//         return res.sendFile(path.resolve(__dirname, '../../public/login.html'))
//     }
//     let appts = sql.query(`select * from appt WHERE ashow = 'Y';`, (err, result, fields) => {
//         if (err) throw err;
//         if (result.length === 0) {
//             return res.send('empty')
//         }
//         return res.send(result)
//     })
// })

// router.post('/appts', (req,res)=>{
//     if (!req.session.userId) {
//         return res.sendFile(path.resolve(__dirname, '../../public/login.html'))
//     }
//     const { patId, docId, time, date } = req.body;
//     sql.query(`SELECT apatient from appt WHERE apatient = '${patId}';`, (err, result) => {
//         if (result.length === 0) {
//             sql.query(`INSERT INTO appt (adoctor, apatient, atime, adate) VALUES('${docId}', '${patId}','${time}','${date}');`, err => {
//                 if (err) throw err;
//                 res.redirect('/alist')
//             })
//         } else {
//             res.sendFile(path.resolve(__dirname,'../../public/errors/e400.html'))
//         }
//     })
// })

// router.get('/appts/deleted', (req, res, next) => {
//     if (!req.session.userId) {
//         return res.sendFile(path.resolve(__dirname, '../../public/login.html'))
//     }
//     let doctors = sql.query(`select * from appt where ashow='N';`, (err, result, fields) => {
//         if (err) throw err;
//         return res.send(result)
//     })
// })

// router.get(`/appts/delete/:ano`, (req, res) => {
//     if (!req.session.userId) {
//         return res.sendFile(path.resolve(__dirname, '../../public/login.html'))
//     }
//     const { ano } = req.params;
//     sql.query(`UPDATE appt set ashow = 'N' WHERE ano = ${ano}; `, (err, result) => {
//         if (err) throw err;
//         res.redirect('/alist')
//     })
// })

// module.exports = router