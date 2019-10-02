const express = require('express')
const router = express.Router()
const path = require('path')
const sql = require('../../db')

router.get('/dlist', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/dlist.html'))
})
router.get('/alist', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/alist.html'))
})

router.get('/doctors',(req, res, next)=>{
    let doctors = sql.query(`select * from doct where dshow='Y';`,(err,result,fields)=>{
        if (err) throw err;
        if(result.length === 0) {
            return res.send('empty')
        }
        return res.send(result)
    })
})

router.get('/doctors/deleted',(req, res, next)=>{
    let doctors = sql.query(`select * from doct where dshow='N';`,(err,result,fields)=>{
        if (err) throw err;
        if(result.length === 0) {
            return res.send('empty')
        }
        return res.send(result)
    })
})

router.get(`/doctors/delete/:dno`,(req,res)=>{
    const {dno} = req.params;
    sql.query(`UPDATE doct set dshow = 'N' WHERE dno = ${dno}; `,(err,result)=>{
        if (err) throw err;
        res.redirect('/dlist')
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

router.get('/dmod/:dno',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../../public/mod/dmod.html'))
})

router.get('/doctor/:dno',(req,res)=>{
    const {dno} = req.params;
    sql.query(`SELECT dname, dspec from doct WHERE dno = ${dno};`,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

router.post('/doctor/:dno',(req,res)=>{
    const {dno} = req.params;
    const {name, spec} =  req.body
    sql.query(`UPDATE doct SET dname='${name}', dspec = '${spec}' WHERE dno = ${dno};`,(err,result)=>{
        if (err) throw err;
        res.redirect('/dlist')
    })
})

module.exports = router