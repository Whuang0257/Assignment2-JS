//Weiming Huang
//Assignment 2

let a = [1,2,3];


function myEach(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array, i);
    }
}

function log(array, i) {
    console.log(array[i]);
}
myEach(a,log);

function myMap(array, callback){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

function double(i) {
    return i * 2;
}

console.log(myMap(a,double));

function myFilter(array, callback){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function greater (i) {
    if (i <= 1) {
        return false;
    } else {
        return true;
    }
}

let b = ["bake", "bat", "born"];
function wordCount(i) {
    if (i.length < 4) {
        return false;
    } else {
        return true;
    }
}

console.log(myFilter(a,greater));
console.log(myFilter(b,wordCount));

function mySome(array, callback) {
    let a = false;
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            a = true;
        }
    }
    return a;
}

function testmySome(i) {
    if (i % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(mySome(a, testmySome));

function myEvery(array, callback) {
    let a = true;
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            a = false;
        }
    }
    return a;
}

function testmyEvery(i) {
    if (i % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(myEvery(a,testmyEvery));

function myReduce(array, callback) {
    let a = 0;
    for (let i = 0; i < array.length; i++) {
        a+=callback(array[i]);
    }
    return a;
}

function testMyReduce(i) {
    console.log(myReduce(a));
    console.log(myReduce(a,3));

}

function myIncludes(array, callback) {
    let a = false;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return a;
}

function testMyIncludes(i) {
    if (i === 3) {
        return true;
    }
}

console.log(myIncludes(a,testMyIncludes));

function myIndexOf(array, callback) {
    let a = -1;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            a = i;
            return a;
        }
    }
    return a;
}

function testMyindexOf(i) {
    if (i === 2) {
        return true;
    }
}

console.log(myIndexOf(a,testMyindexOf));

function myLastIndexOf(array, callback) {
    let a = -1;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            a = i;
        }
    }
    return a;
}

let c = [1,2,3,4,2]
console.log(myLastIndexOf(c,testMyindexOf));

function grabKeys