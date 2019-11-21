var express = require('express');
var router = express.Router();
const session = require('express-session');
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
		req.session.user = req.query.username;
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

router.get('/login', (req, res) => {
	req.session.user ? res.status(200).send({loggedIn: true}) : res.status(200).send({loggedIn: false});
});

router.post('/logout', (req, res) => {
	req.session.destroy((err) => {
	  if (err) {
		res.status(500).send('Could not log out.');
	  } else {
		res.status(200).send({});
	  }
	});
});

module.exports = router;