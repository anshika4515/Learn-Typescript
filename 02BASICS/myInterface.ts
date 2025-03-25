interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    //startTrail: () => string
    startTrail(): string
    getCoupan(copanName: string): string
}


//we can declare interface again this is called reopening of the interface
interface User {
    gitToken: string
}

//we can also use inheritance here
interface Admin extends User{
   role:"QA" | "TA"
}

const hitesh: User = { dbId:22, email:"h@h.com",userId:2343 ,
    gitToken:"iefjoiej",
startTrail: () => {
    return "Trail Started"
},
getCoupan: (copanName:"anshika")=> {
    return "yes"
}
}

export{}