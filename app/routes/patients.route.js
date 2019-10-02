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

router.get('/pmod/:pno', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/mod/pmod.html'))
})

router.get('/patient/:pno', (req, res) => {
    const { pno } = req.params;
    sql.query(`SELECT pname, paddr, psex from patient WHERE pno = ${pno};`, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.get('/patients/deleted', (req, res, next) => {
    let doctors = sql.query(`select * from patient where pshow='N';`, (err, result, fields) => {
        if (err) throw err;
        // if (result.length === 0) {
        //     return res.send('empty')
        // }
        return res.send(result)
    })
})

router.get(`/patients/delete/:pno`, (req, res) => {
    const { pno } = req.params;
    sql.query(`UPDATE patient set pshow = 'N' WHERE pno = ${pno}; `, (err, result) => {
        if (err) throw err;
        res.redirect('/dlist')
    })
})


router.post('/patient/:pno', (req, res) => {
    const { pno } = req.params;
    const { name, addr, sex } = req.body
    sql.query(`UPDATE patient SET pname='${name}', paddr = '${addr}', psex = '${sex}' WHERE pno = ${pno};`, (err, result) => {
        if (err) throw err;
        res.redirect('/plist')
    })
})

module.exports = router