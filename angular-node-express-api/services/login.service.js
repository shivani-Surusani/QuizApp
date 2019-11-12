const loginData=require("../data/login.json");

class LoginService
{
	static logincheck(data)
	{
    try{
      console.log('Server-side login service');
      console.log(typeof data.username);
      console.log(typeof data.password);
      //loginData.forEach(function(d) {
      for( let d of loginData){  
        console.log(typeof d.uname);
        console.log(typeof d.psw);
        if((d.uname===data.username) && (d.psw===data.password)){
            return true;
        }
        }
       return false;
    }
    catch(err){
        return next(err);
    }

    }
}
module.exports = LoginService;