var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var ResultService = require('../services/result.service');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const authMiddleware = (req, res, next) => {
	if(req.session && req.session.user) {
	  next();
	} else {
	  res.status(403).send({
		errorMessage: 'You must be logged in.'
	  });
	}
};

router.post('/',authMiddleware, function(req, res) {
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