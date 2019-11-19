var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var ResultService = require('../services/result.service');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post('/', function(req, res) {
    console.log('entered endpoint3');
    console.log(req.body.choice[2]);
    var category=req.body.category;
    var arr2 = [];
    for (let i = 0; i < 5; i++) {
        arr2.push(req.body.choice[i])
    }
    const resp= ResultService.getresults(arr2,category);
    console.log(resp);
    res.send(resp);
});
module.exports = router;