var express = require('express');
var fs= require('fs');
var router = express.Router();
const session = require('express-session');
var uid = require('uid-safe');

var file=fs.createWriteStream('logs/nodelogfile.txt', { 'flags': 'a'});

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
		let date = new Date();
		let url=req.url;
		file.write('\n'+date+' Username '+req.session.user+' has logged in.  Path is '+ url);
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
	let date = new Date();
	let url=req.url;
	file.write('\n'+date+' Session check.  Path is '+ url);
	req.session.user ? res.status(200).send({loggedIn: true}) : res.status(200).send({loggedIn: false});
});

router.post('/logout', (req, res) => {
	req.session.destroy((err) => {
	  if (err) {
		res.status(500).send('Could not log out.');
	  } else {
		let date = new Date();
		let url=req.url;
		file.write('\n'+date+' Userlogged out.  Path is '+ url);
		res.status(200).send({});
	  }
	});
});

module.exports = router;