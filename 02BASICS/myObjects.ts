const User = {
    name: "Anshika",
    email: "anshika@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name:"Verma", isPaid: false})


//function returing of object type
function createCourse(): {name: string , email:string}{
    return {name:"abcd", email:"abcd@droom.in"}
}

//--> type aliases in typescript
type User = {
    name: string;
    mail: string;
    isActive: boolean
}
//make function
function createUsers(user: User): User{
    return {name:"" , mail:"" , isActive:true}
}
//call function 
createUsers({name:"anshika", mail:"anshika@gmail", isActive:true})


export{}