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