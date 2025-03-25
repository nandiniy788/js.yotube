// primitive 

// 7 type : String , Number, Boolearn, null, undefine, Symbol, BigInt 

const score   = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp  = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
//const bigNumber = 938983873427439829489n

// Refrence (Non primitive)

// Array, Object, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "nandini",
    age: 22,
}
let myfunction = function (){
    console.log("hello word ");
}
console.log(typeof outsideTemp);


