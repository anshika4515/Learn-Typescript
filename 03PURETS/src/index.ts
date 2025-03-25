//learn abt classes
// class User{
//     email: string
//     name: string
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
//professional ppl Code
class User{
    private _courseCount = 1
    constructor(
        public email: string,
        public name: string
    ){
    }

    //getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
 //get and set 
    get courseCount(): number{
        return this._courseCount
    }

    //setter does nt have any return value
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("no")
        }else{
            this._courseCount=courseNum
        }
    }
    
}

//setter should not have a return type
const anshika = new User("anshika@gmail.com","Anshika");
