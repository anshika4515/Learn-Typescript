const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean|number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val:Type): Type{
    return val
}

identityThree("hitesh")

function identityFour<Type>(val:Type): Type{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({})

//define generics
//in generic the return type is array so we have to return the array only
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

//arrow functions with generic
const getMoreSearchProducts = <T>(products:T[]): T => {
    const myIndex = 4;
    return products[myIndex]
}


interface Database{
    connection: string,
    username: string,
    password: string
}
//can give U as database type
function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object {
      return{
        valOne,
        valTwo
      }
}

//anotherFunction(3,{})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}


class Sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}
