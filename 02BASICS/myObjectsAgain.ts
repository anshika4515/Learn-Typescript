//use of readonly
//make type alias
type User = {
    readonly _id : string
    name: string
    email: string
    isActive: boolean
    creaditCard?: number
}
//object bnaega jo follow krega user type
let myUser: User = {
    _id: "1234",
    name: "Anshika",
    email: "ans@gmail.com",
    isActive: false
}

myUser.email = "anshika@gmail.com"
//myUser._id = "123" //cant change bcz it is readonly

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}


//we are using both type with a new type
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
