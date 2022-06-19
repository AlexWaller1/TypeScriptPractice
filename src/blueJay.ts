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

let num21: number = 37;

let num22: number = 44;

let num23: number = 11;

let nums41: number[] = [37, 44, 11];

let nums42: number[] = [21, 22, 23, 24, 25, 26, 27];

let nums43: number[] = [31, 32, 33, 34, 35, 36, 37];

let nums44: number[] = [211, 212, 213, 214, 215, 216];

let nums45: number[] = [42, 23, 51, 3, 65, 44, 34, 22];

function addTen(array: number[]): number[] {
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

function maxNum(array: number[]): number {
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

function minNum(array: number[]): number {
    let min = array[0];
    let i = 1;

    for( ; i < array.length; i++) {
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

const crashBandicoot: string = "Crash Bandicoot";

console.log(crashBandicoot);
// Crash Bandicoot

const neoCortex: string = "Neo Cortex";

console.log(neoCortex);
// Neo Cortex

const dingodile: string = "Dingodile";

console.log(dingodile);
// Dingodile

const spyro: string = "Spyro";

console.log(spyro);
// Spyro

const tinyTiger: string = "Tiny Tiger";

console.log(tinyTiger);
// Tiny Tiger

console.log("-----------------------------------------------");
console.log("------------------------------------------");

const robots: string[] = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

const ePetroleum: string[] = ["Thierry", "Laurent", "Antoine", "Hunzuu", "Gilgamesh"];

function arrayIncludes(array: string[], target: string): boolean {
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

let racecar: string = "racecar";

let television: string = "televison";

let radar: string = "radar";

let hotel: string = "hotel";

let kayak: string = "kayak";

let restaurant: string = "restaurant";

function isPalindrome(string: string): boolean {
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

let primeNum1: number = 9;

let primeNum2: number = 12;

let primeNum3: number = 7;

let primeNum4: number = 14;

let primeNum5: number = 23;

let primeNum6: number = 19;

function isPrimeNum(num: number): boolean {
    
   // let rArray: number[] = [];
    let i = 2;
    let sqrt: number = Math.sqrt(num);

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

let product1: number = 45;

let product2: number = 52;

let product3: number = 64;

let product4: number = 55;

let product5: number = 72;

let product6: number = 96;

function findAllFactors(num: number): number[] {
    let rArray: number[] = [];
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

let nums21: number[] = [52, 53, 54, 55, 56, 57];

let nums22: number[] = [92, 93, 94, 95, 96, 97];

let nums23: number[] = [122, 123, 124, 125, 126, 127];

let true1: boolean[] = [true, true, false, true, true, false, true];

let true2: boolean[] = [false, true, false, true];

let true3: boolean[] = [true, false, false, true, true];

function trueCount(array: boolean[]): number {
    let count: number = 0;
    let i: number = 0;

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