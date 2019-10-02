const express = require('express')
const router = express.Router()
const path = require('path')
const sql = require('../../db')

router.get('/appts', (req, res, next) => {
    let appts = sql.query(`select * from appt;`, (err, result, fields) => {
        if (err) throw err;
        if (result.length === 0) {
            return res.send('empty')
        }
        console.log(result)
        return res.send(result)
    })
})

router.post('/appts', (req,res)=>{
    const { patId, docId, time, date } = req.body;
    sql.query(`SELECT apatient from appt WHERE apatient = '${patId}';`, (err, result) => {
        if (result.length === 0) {
            sql.query(`INSERT INTO appt (adoctor, apatient, atime, adate) VALUES('${docId}', '${patId}','${time}','${date}');`, err => {
                if (err) throw err;
                res.redirect('/alist')
            })
        } else {
            res.sendFile(path.resolve(__dirname,'../../public/errors/e400.html'))
        }
    })
})

module.exports = router