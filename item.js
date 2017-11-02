var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'taobao'
});
router.post('/request',function(req, res, next) {
    console.log("进入后台")
    res.header('Access-Control-Allow-Origin','*')
    var a=req.body.title;
    var b=req.body.na;
    var c=req.body.te;
    var d=req.body.texts;
    var h=req.body.uid;
    console.log(h)
    connection.query(`INSERT INTO details(title,time,writer,concent,uid) VALUES('${a}',now(),'${c}','${d}',${h})`,function(err,we){
        res.send(we)
    })
});
router.post('/gain',function(req, res, next) {
    console.log("进入后台")
    res.header('Access-Control-Allow-Origin','*')
    connection.query('SELECT * FROM details',function(err,we){
        res.send(we)
    })
});
module.exports = router;
