export class User {
    id!: number;
    emailId!:string;
    userName!:string;
    password!:string;
    token?: string;

    constructor()
    {}
    // constructor(id:number,emailId:string,userName:string,password:string)
    // {
    //     this.id=id;
    //     this.emailId=emailId;
    //     this.password = password;
    //     this.userName = userName;
    // }
}
