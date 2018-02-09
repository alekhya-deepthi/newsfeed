
export default class RegisterController {
    constructor() {
      this.email="";
        this.password="";
    }
    doRegister(){
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
        console.log(this.confirmpassword);
        
        }
}


RegisterController.$inject = ["$http"];