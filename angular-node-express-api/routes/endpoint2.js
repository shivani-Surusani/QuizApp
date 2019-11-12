var express = require('express');
var router = express.Router();
var QuizService = require('../services/quiz.service');

router.get('/', async (req, res) =>
{
	try
	{
        console.log(req.query);
        console.log('This is endpoint2');
        var d=req.query.area;
        const quiz = await QuizService.getarea(d);
        console.log(quiz);
        res.send(quiz);
		/*var username=req.query.username;
		var password=req.query.password;
	    res.send({username: username, password: password});*/
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	}
});

module.exports = router;