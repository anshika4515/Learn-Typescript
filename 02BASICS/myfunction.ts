// to avoid returning string
function addNum(num: number): number{
    return num+2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: boolean){}

//using default value
let isLoggedInUser = (name: string , email: string , isPaid: boolean=false) => {}

addNum(4)
getUpper("anshika")
signUpUser("anshika","anshika@gmail,com",true)
isLoggedInUser("anshika","a@gmail.com")

//use case with arrow function
const getHello = (s : string): string =>{
    return ""
}

//use case with map
const heros = ["thor" , "spiderman" , "ironman"]
heros.map((hero): string =>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}