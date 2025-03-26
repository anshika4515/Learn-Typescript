"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("hitesh");
function identityFour(val) {
    return val;
}
identityFour({});
//define generics
//in generic the return type is array so we have to return the array only
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//arrow functions with generic
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
//can give U as database type
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
