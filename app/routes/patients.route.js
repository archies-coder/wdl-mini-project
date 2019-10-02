const express = require('express')
const router = express.Router()
const path = require('path')
const sql = require('../../db')

router.get('/patients', (req, res, next) => {
    if(!req.session.userId){
        return res.sendFile(path.resolve(__dirname,'../../public/login.html'))
    }
    const patients = sql.query(`select * from patient;`, (err, result, fields) => {
        if (err) throw err;
        if (result.length === 0) {
            return res.send('empty')
        }
        return res.send(result)
    })
})

router.post('/patients',(req,res,next)=>{
    const {name, address, sex} = req.body;
    sql.query(`INSERT INTO patient(pname,paddr,psex) VALUES(
        '${name}','${address}','${sex}'
    );`,err=>{
        if(err) throw err
        res.redirect('/plist')
    })
})

module.exports = router