let id: number = 5;

console.log("ID:", id);

// Basic Types

let num1: number = 37;
// number

let mellonTech: string = "Mellon-Tech";
// string

let isDachshund: boolean = true;
// boolean

let anyThing: any = "anything";
// any
anyThing = 31;
// will not error out when data type is changed
// because it is an 'any' data type

let randomNum : number;
// can leave undeclared
randomNum = 49;
// then declare it later as the correct data type

let numsArray: number[] = [1, 2, 3, 4, 5];
// specify data type of array
// can't push new elements not of that data type

let strings1: string[] = ["a", "b", "c", "d", "e"];
// specify array of strings

let booleans1: boolean[] = [true, true, false, false];
// specify array of booleans

let anys1: any[] = [true, 1, "1", "Mellon-Tech"];
// specify array of anys

let tuple1: [number, string, boolean] = [1, "Chipper", true];
// with tuple we can specify what data types will be where in the array

let roboTuples: [number, string][];
// array of tuples
roboTuples = [
    [1, "Hank-44"],
    [2, "Warren-21"],
    [3, "Mellon-Tech"],
    [4, "Eggplant-Head"]
]
// array of tuples

// Unions can be one data type or another if specified
let union1: string | number = 34;

// Enum
enum Direction1 {
    One,
    Two,
    Three,
    Four
}

console.log(Direction1.One);
// 0
console.log(Direction1.Two);
// 1
console.log(Direction1.Three);
// 2

// if assign 4 to One, then Two will be 5 and so on

// eNums can also be assigned as strings if all eNum 
// elements are strings

enum Direction2 {
        Hank44 = "Hank-44",
        Warren21 = "Warren-21",
        MellonTech = "Mellon-Tech",
        EggplantHead = "Eggplant-Head"
}

console.log(Direction2.Hank44);
// Hank-44
console.log(Direction2.Warren21);
// Warren-21
console.log(Direction2.MellonTech);
// Mellon-Tech
console.log(Direction2.EggplantHead);
// Eggplant-Head

// Objects
const singleRobot1: {
    id: number,
    name: string
    // specify what types of values the keys must have
} = {
    id: 1,
    name: "Hank-44"
};

console.log(singleRobot1.id);
// 1
console.log(singleRobot1.name);
// Hank-44

type SingleRobotMold = {
    id: number,
    name: string
}
// can also declare a type (appears similar to a class)

const singlerobot2: SingleRobotMold = {
    id: 2,
    name: "Warren-21"
}
// then declare what is essentially an instance of that class

console.log(singlerobot2.id);
// 2
console.log(singlerobot2.name);
// Warren-21

const singleRobot3: SingleRobotMold = {
    id: 3,
    name: "Mellon-Tech"
}

console.log(singleRobot3.id);
// 3
console.log(singleRobot3.name);
// Mellon-Tech

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;

let customerId2 = cid as number;

// Functions
// specify the data types of the arguments and the type of return
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(2, 2));
// 4

// Void (no return value)
function log(message: string | number): void {
    console.log(message);
}

log(37);
// 37
log("Hello Oa");
// Hello Oa