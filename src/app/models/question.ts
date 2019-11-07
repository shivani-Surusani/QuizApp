export class question {
    id: number;
    question: string;
    //questionTypeId: number;
    //options: string[];
    A:string;
    B:string;
    C:string;
    D:string;

    answered: string;
    correct: string;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.question = data.question;
        //this.questionTypeId = data.questionTypeId;
        //this.options = [];
        this.A=data.A;
        this.B=data.B;
        this.C=data.C;
        this.D=data.D;
        this.answered="";
        this.correct=data.correct;
    }
}