export class login {
    id: number;
    uname: string;
    psw:string;
    //questionTypeId: number;
    //options: string[];
    
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.uname = data.uname;
        //this.questionTypeId = data.questionTypeId;
        //this.options = [];
       this.psw=data.psw;
    }
}