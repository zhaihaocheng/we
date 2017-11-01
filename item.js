var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({//创建链接地址
    host     : 'localhost',//IP地址
    user     : 'root',//用户名
    password : '',//密码
    database:'taobao'
});

/* GET home page. */

router.post('/submit', function(req, res, next) {
    console.log("进入后台")

    res.header('Access-Control-Allow-Origin','*')
    var aa=req.body.name;
    var b=req.body.title
    connection.query(`INSERT INTO item(name,detail) VALUES('${aa}','${b}')`,function(){
        res.send("加入成功")
    }) 
    /*connection.query(`INSERT INTO item(name,price) VALUES('${aa}','${bb}')`, function() {//err报错rows形参
        
    console.log(req.body)
    var aa=req.body.name;
    var b=req.body.title
        res.send("jarsad")
    });*/
});
module.exports = router;
