class ResultService{
    static getresults(answers,category){
        var correct=0;
        var wrong=0;
        var score=0;
        console.log(answers);
        console.log(category);
        if(category==="")
            return {};
        const quiz=require("../data/"+category+"quiz.json");
        for (let i = 0; i < quiz.length; i++) {
            if(quiz[i].correct==answers[quiz[i].id]){
                 correct=correct+1;
                 score=score+10;
                 console.log(quiz[i].correct);
                 console.log(correct);
            }
            else{
                  wrong= wrong+1;
            }
        }
        if(score>=30){
            return ({message:'Congratulations! You have passed the quiz',score:score,correct: correct,wrong:wrong});
        }
        return ({message:'Sorry! you have failed the quiz',score:score,correct: correct,wrong:wrong});
    }

}
module.exports = ResultService;