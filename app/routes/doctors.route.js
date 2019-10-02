const express = require('express')
const router = express.Router()
const path = require('path')
const sql = require('../../db')

router.get('/dlist', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/dlist.html'))
})

router.get('/doctors',(req, res, next)=>{
    let doctors = sql.query(`select * from doct;`,(err,result,fields)=>{
        if (err) throw err;
        if(result.length === 0) {
            return res.send('empty')
        }
        return res.send(result)
    })
})

router.post('/doctors',(req,res,next)=>{
    const {name, spec} = req.body;
    sql.query(`SELECT dname from doct WHERE dname = '${name}';`,(err,result)=>{
        if(result.length === 0) {
            sql.query(`INSERT INTO doct (dname,dspec) VALUES('${name}', '${spec}');`,err=>{
                if (err) throw err;
                res.redirect('/dlist')
            })
        } else {
            res.redirect('/dlist')
            // res.sendFile(path.resolve(__dirname,'../../public/errors/e400.html'))
        }
    })
})

module.exports = router