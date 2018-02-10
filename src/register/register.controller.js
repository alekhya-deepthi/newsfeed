
export default class RegisterController {
    constructor() {
        this.username="";

      this.email="";
        this.password="";
        this.confirmpassword="";
    }
    doRegister(){
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
        console.log(this.confirmpassword);
        
        }
}


RegisterController.$inject = ["$http"];