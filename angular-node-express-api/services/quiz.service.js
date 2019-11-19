//const musicquiz=require("../data/musicquiz.json");
//const dancequiz=require("../data/dancequiz.json");
//const sportquiz=require("../data/sportsquiz.json");
class QuizService{
    static getarea(data){
    try{
        console.log('inside quiz service');
        console.log(data);
        if(data==="music"){
            const musicquiz=require("../data/musicquiz.json");
            return musicquiz;
        }
        else if(data==="dance"){
            const dancequiz=require("../data/dancequiz.json");
            return dancequiz;
        }
        else if(data==="sports"){
            const sportquiz=require("../data/sportsquiz.json");
            return sportquiz;
        }
        else
            return {};
    }
            catch(err){
            return next(err);
    }
    }
}
module.exports = QuizService;