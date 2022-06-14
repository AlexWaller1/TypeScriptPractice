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