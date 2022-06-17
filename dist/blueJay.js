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
    for (; i <= num; i++) {
    }
    return rArray;
}
