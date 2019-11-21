var express = require('express');
var router = express.Router();
var QuizService = require('../services/quiz.service');

const authMiddleware = (req, res, next) => {
	if(req.session && req.session.user) {
	  next();
	} else {
	  res.status(403).send({
		errorMessage: 'You must be logged in.'
	  });
	}
};

router.get('/', authMiddleware, async (req, res) =>
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