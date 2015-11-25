var express = require('express');

var router = express.Router();

router.get('/', function(req,res){
    res.render('index');
});

/*
ide jöhet még például egy
router.post('/', function(){});

satöbbi, majd meglátod

*/

module.exports = router;

