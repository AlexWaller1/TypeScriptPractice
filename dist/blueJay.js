"use strict";
console.log("Hello Oa");
// Hello Oa
console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
// 5e-324
console.log(Number.EPSILON);
// 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991
console.log("--------------------------------------------");
console.log("-----------------------------------------");
let num21 = 37;
let num22 = 44;
let num23 = 11;
let nums41 = [37, 44, 11];
let nums42 = [21, 22, 23, 24, 25, 26, 27];
let nums43 = [31, 32, 33, 34, 35, 36, 37];
let nums44 = [211, 212, 213, 214, 215, 216];
let nums45 = [42, 23, 51, 3, 65, 44, 34, 22];
function addTen(array) {
    let i = 0;
    for (; i < array.length; i++) {
        array[i] = array[i] + 10;
    }
    return array;
}
console.log(addTen(nums43));
// [41, 42, 43, 44, 45, 46, 47]
console.log(addTen(nums44));
// [221, 222, 223, 224, 225, 226]
function maxNum(array) {
    let max = array[0];
    let i = 1;
    for (; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxNum(nums45));
// 65
function minNum(array) {
    let min = array[0];
    let i = 1;
    for (; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
console.log(minNum(nums45));
// 3
console.log("----------------------------------------------");
console.log("-------------------------------------------------");
const crashBandicoot = "Crash Bandicoot";
console.log(crashBandicoot);
// Crash Bandicoot
const neoCortex = "Neo Cortex";
console.log(neoCortex);
// Neo Cortex
const dingodile = "Dingodile";
console.log(dingodile);
// Dingodile
const spyro = "Spyro";
console.log(spyro);
// Spyro
const tinyTiger = "Tiny Tiger";
console.log(tinyTiger);
// Tiny Tiger
console.log("-----------------------------------------------");
console.log("------------------------------------------");
const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];
const ePetroleum = ["Thierry", "Laurent", "Antoine", "Hunzuu", "Gilgamesh"];
function arrayIncludes(array, target) {
    let i = 0;
    for (; i < array.length; i++) {
        if (array[i] == target) {
            return true;
        }
    }
    return false;
}
console.log(arrayIncludes(robots, "Mellon-Tech"));
// true
console.log(arrayIncludes(robots, "Bender"));
// false
console.log("------------------------------------------");
console.log("-------------------------------------------------");
let racecar = "racecar";
let television = "televison";
let radar = "radar";
let hotel = "hotel";
let kayak = "kayak";
let restaurant = "restaurant";
function isPalindrome(string) {
    let i = 0;
    let j = string.length - 1;
    for (; i < j; i++, j--) {
        if (string.charAt(i) !== string.charAt(j)) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(racecar));
// true
console.log(isPalindrome(television));
// false
console.log(isPalindrome(radar));
// true
console.log(isPalindrome(hotel));
// false
console.log(isPalindrome(kayak));
// true
console.log(isPalindrome(restaurant));
// false
console.log("-----------------------------------------");
console.log("------------------------------------------------");
let primeNum1 = 9;
let primeNum2 = 12;
let primeNum3 = 7;
let primeNum4 = 14;
let primeNum5 = 23;
let primeNum6 = 19;
function isPrimeNum(num) {
    // let rArray: number[] = [];
    let i = 2;
    let sqrt = Math.sqrt(num);
    for (; i <= sqrt; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNum(primeNum1));
// false
console.log(isPrimeNum(primeNum2));
// false
console.log(isPrimeNum(primeNum3));
// true
console.log(isPrimeNum(primeNum4));
// false
console.log(isPrimeNum(primeNum5));
// true
console.log(isPrimeNum(primeNum6));
// true
console.log("------------------------------------------------");
console.log("---------------------------------------------");
let product1 = 45;
let product2 = 52;
let product3 = 64;
let product4 = 55;
let product5 = 72;
let product6 = 96;
function findAllFactors(num) {
    let rArray = [];
    let i = 1;
    let sqrt = Math.sqrt(num);
    for (; i <= sqrt; i++) {
        if (num % i == 0) {
            let factor2 = num / i;
            rArray.push(i);
            if (i !== factor2) {
                rArray.push(factor2);
            }
        }
    }
    return rArray;
}
console.log(findAllFactors(product1));
// [1, 45, 3, 15, 5, 9]
console.log(findAllFactors(product2));
// [1, 52, 2, 26, 4, 13]
console.log(findAllFactors(product3));
// [1, 64, 2, 32, 4, 16, 8]
console.log(findAllFactors(product4));
// [1, 55, 5, 11]
console.log(findAllFactors(product5));
// [1, 72, 2, 36, 3, 24, 4, 18, 6, 12, 8, 9]
console.log(findAllFactors(product6));
// 1, 96, 2, 48, 3, 32, 4, 24, 6, 16, 8, 12]
console.log("--------------------------------------------------");
console.log("---------------------------------------------");
console.log(robots[0]);
// Hank-44
let nums21 = [52, 53, 54, 55, 56, 57];
let nums22 = [92, 93, 94, 95, 96, 97];
let nums23 = [122, 123, 124, 125, 126, 127];
let true1 = [true, true, false, true, true, false, true];
let true2 = [false, true, false, true];
let true3 = [true, false, false, true, true];
function trueCount(array) {
    let count = 0;
    let i = 0;
    for (; i < array.length; i++) {
        if (array[i]) {
            count++;
        }
    }
    return count;
}
console.log(trueCount(true1));
// 5
console.log(trueCount(true2));
// 2
console.log(trueCount(true3));
// 3
console.log("-------------------------------------------");
console.log("--------------------------------------------");
const hank44 = "Hank-44";
const warren21 = "Warren-21";
const mellonTech2 = "Mellon-Tech";
const eggplantHead = "Eggplant-Head";
const timberTronIo = "Timber-Tron-Io";
//-------------------------------------------------------
let mt3 = mellonTech2.split("h");
console.log(mt3);
// ['Mellon-Tec', '']
//-------------------------------------------------
function stringSplit(string, char) {
    let rArray = [];
    let i = 0;
    if (char == "") {
        for (; i < string.length; i++) {
            let newElement = string.charAt(i);
            rArray.push(newElement);
        }
    }
    if (char !== "") {
        let newString = "";
        for (; i < string.length; i++) {
            if (string.charAt(i) !== char) {
                newString = newString.concat(string.charAt(i));
            }
            if (string.charAt(i) == char) {
                rArray.push(newString);
                newString = "";
            }
            if (i == string.length - 1) {
                rArray.push(newString);
            }
        }
    }
    return rArray;
}
console.log(stringSplit(mellonTech2, ""));
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']
console.log(stringSplit(mellonTech2, "-"));
// ['Mellon', 'Tech']
console.log(stringSplit(mellonTech2, "h"));
// ['Mellon-Tec', '']
console.log(stringSplit(eggplantHead, ""));
// ['E', 'g', 'g', 'p', 'l', 'a', 'n', 't', '-', 'H', 'e', 'a', 'd']
console.log(stringSplit(eggplantHead, "-"));
// ['Eggplant', 'Head']
console.log(stringSplit(timberTronIo, "-"));
// ['Timber', 'Tron', 'Io']
const timberTronIoSplit = stringSplit(timberTronIo, "-");
console.log("----------------------------------------------");
console.log("------------------------------------------");
const mellonSplit1 = stringSplit(mellonTech2, "");
console.log(mellonSplit1);
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']
const mellonSplit2 = stringSplit(mellonTech2, "-");
console.log(mellonSplit2);
// ['Mellon', 'Tech']
const eggplantSplit1 = stringSplit(eggplantHead, "");
console.log(eggplantSplit1);
// ['E', 'g', 'g', 'p', 'l', 'a', 'n', 't', '-', 'H', 'e', 'a', 'd']
const eggplantSplit2 = stringSplit(eggplantHead, "-");
console.log(eggplantSplit2);
// ['Eggplant', 'Head']
function dotReverse(array) {
    let temp = "";
    let i = 0;
    let j = array.length - 1;
    for (; i < j; i++, j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(dotReverse(mellonSplit1));
// ['h', 'c', 'e', 'T', '-', 'n', 'o', 'l', 'l', 'e', 'M']
console.log(dotReverse(mellonSplit2));
// ['Tech', 'Mellon']
console.log(dotReverse(eggplantSplit1));
// ['d', 'a', 'e', 'H', '-', 't', 'n', 'a', 'l', 'p', 'g', 'g', 'E']
console.log(dotReverse(eggplantSplit2));
// ['Head', 'Eggplant']
console.log("----------------------------------------------");
console.log("-----------------------------------------");
const mellonReverse1 = dotReverse(mellonSplit1);
console.log(mellonReverse1);
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']
const mellonReverse2 = dotReverse(mellonSplit2);
console.log(mellonReverse2);
// ['Mellon', 'Tech']
const eggplantReverse1 = dotReverse(eggplantSplit1);
console.log(eggplantReverse1);
// ['E', 'g', 'g', 'p', 'l', 'a', 'n', 't', '-', 'H', 'e', 'a', 'd']
const eggplantReverse2 = dotReverse(eggplantSplit2);
console.log(eggplantReverse2);
// ['Eggplant', 'Head]
function dotJoin(array, char) {
    let rString = "";
    let i = 0;
    if (char == "") {
        for (; i < array.length; i++) {
            rString = rString.concat(array[i]);
        }
    }
    if (char !== "") {
        for (; i < array.length; i++) {
            if (i !== array.length - 1) {
                rString = rString.concat(array[i]);
                rString = rString.concat(char);
            }
            else {
                rString = rString.concat(array[i]);
            }
        }
    }
    return rString;
}
console.log(dotJoin(mellonReverse1, ""));
// Mellon-Tech
console.log(dotJoin(mellonReverse2, "==!!=="));
// Mellon==!!==Tech
console.log(dotJoin(eggplantReverse1, ""));
// Eggplant-Head
console.log(dotJoin(eggplantReverse2, "==!!=="));
// Eggplant==!!==Head
console.log(dotJoin(timberTronIoSplit, "==!!=="));
// Timber==!!==Tron==!!==Io
console.log("----------------------------------------------");
console.log("===========================================");
let any21 = ["television", true, 3, [8]];
let tuple21 = ["string", "string2", true, 3];
let tuple22 = ["true", true];
let roboTuples1 = [
    [1, "Hank-44"],
    [2, "Warren-21"],
    [3, "Mellon-Tech"],
    [4, "Eggplant-Head"],
    [5, "Timber-Tron-Io"]
];
let roboTuples2 = [
    [0, "Hank-44", true],
    [1, "Warren-21", true],
    [2, "Mellon-Tech", true],
    [3, "Eggplant-Head", true],
    [4, "Timber-Tron-Io", true]
];
let roboTuples3 = [
    [0, { name: "Hank-44", isRobot: true }],
    [1, { name: "Warren-21", isRobot: true }],
    [2, { name: "Mellon-Tech", isRobot: true }],
    [3, { name: "Eggplant-Head", isRobot: true }],
    [4, { name: "Timber-Tron-Io", isRobot: true }]
];
console.log("-------------------------------------------");
console.log("---------------------------------------");
// unions
let num31 = 31;
console.log(num31);
// 31 (number)
let num32 = "32";
console.log(num32);
// 32 (string)
let num33 = true;
console.log(num33);
// true
let num34 = { id: 34 };
console.log(num34);
// {id: 34}
let num35 = { id: 35 };
console.log(num35);
// {id: 35}
console.log("-----------------------------------------------");
console.log("------------------------------------------");
// Enums
var NumSample;
(function (NumSample) {
    NumSample[NumSample["one"] = 0] = "one";
    NumSample[NumSample["two"] = 1] = "two";
    NumSample[NumSample["three"] = 2] = "three";
    NumSample[NumSample["four"] = 3] = "four";
    NumSample[NumSample["five"] = 4] = "five";
})(NumSample || (NumSample = {}));
;
console.log("NumSample:");
// NumSample:
console.log(NumSample.one);
// 0
console.log(NumSample.two);
// 1
console.log(NumSample.three);
// 2
console.log(NumSample.four);
// 3
console.log(NumSample.five);
// 4
var NumSample2;
(function (NumSample2) {
    NumSample2[NumSample2["twenty"] = 20] = "twenty";
    NumSample2[NumSample2["twentyOne"] = 21] = "twentyOne";
    NumSample2[NumSample2["twentyTwo"] = 22] = "twentyTwo";
    NumSample2[NumSample2["twentyThree"] = 23] = "twentyThree";
    NumSample2[NumSample2["twentyFour"] = 24] = "twentyFour";
    NumSample2[NumSample2["twentyFive"] = 25] = "twentyFive";
})(NumSample2 || (NumSample2 = {}));
console.log("NumSample2:");
// NumSample2:
console.log(NumSample2.twenty);
// 20
console.log(NumSample2.twentyOne);
// 21
console.log(NumSample2.twentyTwo);
// 22
console.log(NumSample2.twentyThree);
// 23
console.log(NumSample2.twentyFour);
// 24
console.log(NumSample2.twentyFive);
// 25
//==========================================================
var Hammerhead;
(function (Hammerhead) {
    Hammerhead["name"] = "Hammerhead";
    Hammerhead["occupation"] = "Pickerel Cola Space Truck Driver";
    Hammerhead["homePlanet"] = "Venice Sands 5";
    Hammerhead["hasPickerelCola"] = "true";
    // booleans not allowed in enums
    Hammerhead["hasCoolJacket"] = "true";
    // booleans not allowed in enums
})(Hammerhead || (Hammerhead = {}));
console.log("Hammerhead:");
// Hammerhead:
console.log(Hammerhead.name);
// Hammerhead
console.log(Hammerhead.occupation);
// Pickerel Cola Space Truck Driver
console.log(Hammerhead.homePlanet);
// Venice Sands 5
console.log(Hammerhead.hasPickerelCola);
// true (string)
console.log(Hammerhead.hasCoolJacket);
// true (strings)
console.log("-----------------------------------------------");
console.log("-------------------------------------------");
// TypeScript Objects
const hank44Obj = {
    id: 0,
    name: "Hank-44",
    homeTown: "Nouvelle Milwaukee",
    isRobot: true
};
console.log("Hank-44 Object:");
// Hank-44 Object
console.log(hank44Obj.id);
// 0
console.log(hank44Obj.name);
// Hank-44
console.log(hank44Obj.homeTown);
// Nouvelle Milwaukee
console.log(hank44Obj.isRobot);
// true
console.log("---------------------------------------------");
const warren21Obj = {
    id: 1,
    name: "Warren-21",
    homeTown: "Nouvelle Milwaukee",
    isRobot: true,
};
console.log("Warren-21 Object:");
// Warren-21 Object:
console.log(warren21Obj.id);
// 1
console.log(warren21Obj.name);
// Warren-21
console.log(warren21Obj.homeTown);
// Nouvelle Milwaukee
console.log(warren21Obj.isRobot);
// true 
console.log("---------------------------------------------");
console.log("--------------------------------------------");
const hank44Ob = {
    id: 0,
    name: "Hank-44",
    homeTown: "Nouvelle Milwaukee",
    isRobot: true,
    message() {
        return `${this.name} from RoboType:`;
    }
};
console.log(hank44Ob.message());
// Hank-44 from RoboType:
console.log(hank44Ob.id);
// 0
console.log(hank44Ob.name);
//  Hank-44
console.log(hank44Ob.homeTown);
// Nouvelle Milwaukee
console.log(hank44Ob.isRobot);
// true
console.log("-------------------------------------------------");
const warren21Ob = {
    id: 1,
    name: "Warren-21",
    homeTown: "Nouvelle Milwaukee",
    isRobot: true,
    message() {
        return `${this.name} from RoboType:`;
    }
};
console.log(warren21Ob.message());
// Warren-21 from RoboType:
console.log(warren21Ob.id);
// 1
console.log(warren21Ob.name);
// Warren-21
console.log(warren21Ob.homeTown);
// Nouvelle Milwaukee
console.log(warren21Ob.isRobot);
// true
console.log("-----------------------------------------------");
const mellonTechOb = {
    id: 2,
    name: "Mellon-Tech",
    homeTown: "Somerville, New Jersey",
    isRobot: true,
    message() {
        return `${this.name} from RoboType:`;
    }
};
console.log(mellonTechOb.message());
// Mellon-Tech from RobotType:
console.log(mellonTechOb.id);
// 2
console.log(mellonTechOb.name);
// Mellon-Tech
console.log(mellonTechOb.homeTown);
// Somerville, New Jersey
console.log(mellonTechOb.isRobot);
// true 
console.log("-------------------------------------------");
const eggplantHeadOb = {
    id: 3,
    name: "Eggplant-Head",
    homeTown: "Somerville, New Jersey",
    isRobot: true,
    message() {
        return `${this.name} from RoboType:`;
    }
};
console.log(eggplantHeadOb.message());
// Eggplant-Head from RoboType
console.log(eggplantHeadOb.id);
// 3
console.log(eggplantHeadOb.name);
// Eggplant-Head
console.log(eggplantHeadOb.homeTown);
// Somerville, New Jersey
console.log(eggplantHeadOb.isRobot);
// true
console.log("-------------------------------------------------");
console.log("--------------------------------------------");
// Type Assertion
let testVar1 = 37;
console.log(testVar1);
// 37 (number)
console.log(typeof testVar1);
// number
let testVar2 = testVar1;
console.log(testVar2);
// 37 (number)
console.log(typeof testVar2);
// number
let testVar3 = testVar1;
console.log(testVar3);
// 37 (number)
console.log(typeof testVar3);
// number
console.log("---------------------------------------------");
let testString = "FJ Cruiser";
console.log(typeof testString);
// string
let testString2 = testString;
console.log(testString2);
// FJ Cruiser
testString2 = "Jeep Wrangler";
console.log(testString2);
// Jeep Wrangler
// testString2 = 2
// will throw an error
testString = true;
// will not throw an error
let michaelChabon = "Michael Chabon";
let michaelChabon2 = michaelChabon;
console.log(michaelChabon2);
// Michael Chabon
michaelChabon2 = "Wonder Boys";
console.log(michaelChabon2);
// Wonder Boys
console.log("--------------------------------------------");
console.log("-------------------------------------------");
console.log("Hello Oa");
// Hello Oa
const mellon_Tech = "Mellon-Tech";
// can use underscore on variable names
console.log(mellon_Tech);
// Mellon-Tech
const eggplant_Head = "Eggplant-Head";
// can use underscore on variable names
console.log(eggplant_Head);
// Eggplant-Head
console.log("---------------------------------------------");
console.log("------------------------------------------");
// TypeScript Interfaces
// Similar to Types as they give a BluePrint for objects to follow
console.log("TypeScript Interfaces");
console.log("--------------------------------------------");
const hammerHead = {
    id: 1,
    name: "Hammerhead",
    occupation: "Pickerel Cola Space Truck Driver",
    homePlanet: "Venice Sands 5",
    hasPickerelCola: true
};
console.log(hammerHead.id);
// 1
console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.occupation);
// Pickerel Cola Space Truck Driver
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.hasPickerelCola);
// true
console.log("-----------------------------------------------");
const taylor = {
    id: 2,
    name: "Taylor",
    occupation: "Pickerel Cola Space Truck Driver",
    homePlanet: "Mariner Mists",
    hasPickerelCola: true
};
console.log(taylor.id);
// 2
console.log(taylor.name);
// Taylor
console.log(taylor.occupation);
// Pickerel Cola Space Truck Driver
console.log(taylor.homePlanet);
// Mariner Mists
console.log(taylor.hasPickerelCola);
// true
console.log("------------------------------------------------");
const harvey = {
    id: 3,
    name: "Harvey",
    occupation: "River Dam Builder",
    homePlanet: "Hardin-37",
    hasPickerelCola: false
};
console.log(harvey.id);
// 3
console.log(harvey.name);
// Harvey
console.log(harvey.occupation);
// River Dam Builder
console.log(harvey.homePlanet);
// Hardin-37
console.log(harvey.hasPickerelCola);
// true
console.log("------------------------------------------------");
const wibaux = {
    id: 4,
    name: "Wibaux",
    occupation: "River Guide",
    homePlanet: "Hardin-37",
    hasPickerelCola: false
};
console.log(wibaux.id);
// 4
console.log(wibaux.name);
// Wibaux
console.log(wibaux.occupation);
// River Guide
console.log(wibaux.homePlanet);
// Hardin-37
console.log(wibaux.hasPickerelCola);
// can do this with a string but not with an interface
console.log("----------------------------------------------");
console.log("-------------------------------------------");
const isEven = (num) => {
    if (num % 2 == 0) {
        return true;
    }
    return false;
};
console.log(isEven(5));
console.log(isEven(10));
console.log(isEven(15));
console.log(isEven(20));
console.log("---------------------------------------------");
