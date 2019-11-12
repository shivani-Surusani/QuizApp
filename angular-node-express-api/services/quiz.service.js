const musicquiz=require("../data/musicquiz.json");
const dancequiz=require("../data/dancequiz.json");

class QuizService{
    static getarea(data){
    try{
        console.log('inside quiz service');
        console.log(data);
        if(data==="music")
            return musicquiz;
        else if(data==="dance")
            return dancequiz;
        else 
            return {};
    }
            catch(err){
            return next(err);
    }
    }
}
module.exports = QuizService;