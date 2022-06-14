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
console.log(singleRobot3.name);
