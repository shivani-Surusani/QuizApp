var express = require('express');
var router = express.Router();
var uid = require('uid-safe');
var LoginService = require('../services/login.service');

router.get('/', async (req, res) =>
{
	try
	{
        console.log(req.query);
        console.log('This is enpoint1');
		const loggedin = await LoginService.logincheck(req.query);
		console.log('After Service');
		/*var username=req.query.username;
		var password=req.query.password;
	    res.send({username: username, password: password});*/
		if(loggedin===true){ 
		res.json({ status: true});
		}
		res.json({
			status:false
		});
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	}
});

module.exports = router;