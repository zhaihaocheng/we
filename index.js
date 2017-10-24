var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var data=fs.readFileSync('we.txt','utf-8');
    console.log(data)
     data=data.split(':')[1];
 data++
 fs.writeFileSync('we.txt',"刷新页面:"+data);


  res.render('index', { title:"刷新页面:"+data});
});

router.get('/hc', function(req, res, next) {
    var data=fs.readFileSync('on.txt','utf-8');
    console.log(data)
    data=data.split(':')[1];
    data++
    fs.writeFileSync('on.txt',"刷新页面:"+data);


    res.render('index', { title:"刷新页面:"+data});
});

module.exports = router;
