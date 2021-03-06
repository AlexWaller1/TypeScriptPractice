"use strict";
let id = 5;
console.log("ID:", id);
// Basic Types
let num1 = 37;
// number
let mellonTech = "Mellon-Tech";
// string
let isDachshund = true;
// boolean
let anyThing = "anything";
// any
anyThing = 31;
// will not error out when data type is changed
// because it is an 'any' data type
let randomNum;
// can leave undeclared
randomNum = 49;
// then declare it later as the correct data type
let numsArray = [1, 2, 3, 4, 5];
// specify data type of array
// can't push new elements not of that data type
let strings1 = ["a", "b", "c", "d", "e"];
// specify array of strings
let booleans1 = [true, true, false, false];
// specify array of booleans
let anys1 = [true, 1, "1", "Mellon-Tech"];
// specify array of anys
let tuple1 = [1, "Chipper", true];
// with tuple we can specify what data types will be where in the array
let roboTuples;
// array of tuples
roboTuples = [
    [1, "Hank-44"],
    [2, "Warren-21"],
    [3, "Mellon-Tech"],
    [4, "Eggplant-Head"]
];
// array of tuples
// Unions can be one data type or another if specified
let union1 = 34;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["One"] = 0] = "One";
    Direction1[Direction1["Two"] = 1] = "Two";
    Direction1[Direction1["Three"] = 2] = "Three";
    Direction1[Direction1["Four"] = 3] = "Four";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.One);
// 0
console.log(Direction1.Two);
// 1
console.log(Direction1.Three);
// 2
// if assign 4 to One, then Two will be 5 and so on
// eNums can also be assigned as strings if all eNum 
// elements are strings
var Direction2;
(function (Direction2) {
    Direction2["Hank44"] = "Hank-44";
    Direction2["Warren21"] = "Warren-21";
    Direction2["MellonTech"] = "Mellon-Tech";
    Direction2["EggplantHead"] = "Eggplant-Head";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Hank44);
// Hank-44
console.log(Direction2.Warren21);
// Warren-21
console.log(Direction2.MellonTech);
// Mellon-Tech
console.log(Direction2.EggplantHead);
// Eggplant-Head
// Objects
const singleRobot1 = {
    id: 1,
    name: "Hank-44"
};
console.log(singleRobot1.id);
// 1
console.log(singleRobot1.name);
// can also declare a type (appears similar to a class)
const singlerobot2 = {
    id: 2,
    name: "Warren-21"
};
// then declare what is essentially an instance of that class
console.log(singlerobot2.id);
// 2
console.log(singlerobot2.name);
// Warren-21
const singleRobot3 = {
    id: 3,
    name: "Mellon-Tech"
};
console.log(singleRobot3.id);
// 3
console.log(singleRobot3.name);
// Mellon-Tech
// Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Functions
// specify the data types of the arguments and the type of return
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 2));
// 4
// Void (no return value)
function log(message) {
    console.log(message);
}
log(37);
// 37
log("Hello Oa");
const user1 = {
    id: 1,
    name: "Tomar Rae"
};
// can't do an or with an interface
const numString1 = 37;
const numString2 = "37";
console.log(numString1);
// 37 (number)
console.log(numString2);
const add1 = (x, y) => x + y;
console.log(add1(9, 10));
// 19
const subtraction1 = (x, y) => y - x;
console.log(subtraction1(9, 10));
class GreenLantern {
    constructor(id, name, homePlanet, sector, fearless) {
        this.id = id,
            this.name = name,
            this.homePlanet = homePlanet,
            this.sector = sector,
            this.fearless = fearless;
    }
    lanternConfirm() {
        return `${this.name} is a member of the Green Lantern Corps`;
    }
}
console.log("-------------------------------------------------");
console.log("-------------------------------------------");
class OutlyingLanterns extends GreenLantern {
    constructor(id, name, homePlanet, sector, fearless, outpost) {
        super(id, name, homePlanet, sector, fearless);
        this.outpost = outpost;
    }
}
// Generics
// without Generic
function getArray(elements) {
    return new Array().concat(elements);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["a", "b", "c", "d"]);
// with Generic
function getArray2(elements) {
    return new Array().concat(elements);
}
// Specifying a Generic type allow to reuse for many data types
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(["a", "b", "c", "d"]);
