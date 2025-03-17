"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33; //can use both number , string or anything else
score = 44;
score = "55";
var anshika = { name: "Anshika", id: 932 };
//change the data
anshika = { username: "anshi", id: 99 };
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array for both type number and string
var arr = ["2", "3", 9, 0];
console.log(arr);
