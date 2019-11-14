export class result{
    message:String;
    score:Number;
    correct: Number;
    wrong: Number;

    constructor(data: any) {
        data = data || {};
        this.message = data.message;
        this.score = data.score;
        //this.questionTypeId = data.questionTypeId;
        //this.options = [];
        this.correct=data.correct;
        this.wrong=data.wrong;
    }
}