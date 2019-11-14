var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post('/', function(req, res) {
var correct=parseInt(req.body.correct);

    console.log('entered endpoint3');
    console.log(correct);
    var score=correct*5;
    console.log(score);
    var wrong=5-correct;
    console.log(wrong);
    if(score>=15){
        res.send({message:'Congratulations! You have passed the quiz',score:score,correct: correct,wrong:wrong});
    }
    res.send({message:'Sorry! you have failed the quiz',score:score,correct: correct,wrong:wrong});
});
module.exports = router;