var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'taobao'
});
router.post('/submit', function(req, res, next) {
    console.log("进入后台")
    res.header('Access-Control-Allow-Origin','*')
    var aa=req.body.b;
    console.log(aa)
    connection.query(`SELECT * FROM age WHERE name LIKE '%${aa}%'`,function(err,we){
       console.log(we)

        res.send(we)
    })
});
module.exports = router;
