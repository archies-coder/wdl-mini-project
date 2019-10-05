const express = require('express')
const router = express.Router()
const path = require('path')
const sql = require('../../db')

router.get('/dlist', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login')
    }
    return res.sendFile(path.resolve(__dirname,'../../public/dlist.html'))
})
router.get('/plist', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login')
    }
    return res.sendFile(path.resolve(__dirname,'../../public/plist.html'))
})

router.get('/alist', (req, res) => {
    if (!req.session.userId) {
        return res.sendFile(path.resolve(__dirname, '../../public/login.html'))
    }
    res.sendFile(path.resolve(__dirname,'../../public/alist.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../public/login.html'))
})

router.post('/login', (req, res, next) => {
    sql.query('SELECT * FROM users',(error, rows, fields)=>{
        if (error) throw error
        console.log(rows)
        res.redirect('/dlist')
        // const user = response.find(obj=>obj.email===req.body.email)
        // if(!user){
        //     return res.sendFile(path.resolve(__dirname,'../../public/errors/e404.html'))
        // }
        // if(req.body.password!==user.password){
        //     return res.sendFile(path.resolve(__dirname, '../../public/errors/e400.html'))
        // }
        // req.session.userId = user.id
        // req.session.user = user
        // res.redirect('/dlist')
    })
})

module.exports = router