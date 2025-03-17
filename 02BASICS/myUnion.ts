let score: number | string= 33   //can use both number , string or anything else
score = 44
score = "55"

type Users = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
} 

let anshika: Users | Admin = {name:"Anshika" , id:932}
//change the data
anshika = {username:"anshi" , id:99}

function getDBId(id:number | string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
}

//array for both type number and string
const arr: (number | string) [] = ["2","3",9,0]
console.log(arr)
export {}