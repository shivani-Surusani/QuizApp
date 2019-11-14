const musicquiz=require("../data/musicquiz.json");
const dancequiz=require("../data/dancequiz.json");
const sportquiz=require("../data/sportsquiz.json");
class QuizService{
    static getarea(data){
    try{
        console.log('inside quiz service');
        console.log(data);
        if(data==="music")
            return musicquiz;
        else if(data==="dance")
            return dancequiz;
        else if(data==="sports")
            return sportquiz;
        else
            return {};
    }
            catch(err){
            return next(err);
    }
    }
}
module.exports = QuizService;