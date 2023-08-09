// 数组去重

const arr = [1,2,1,2,3,4,5,6,6,6,4]

function name(arr) {
    return [...new Set(arr)]
}

function name1(array) {
    var result = {}
    for (let index = 0; index < array.length; index++) {
        result[array[index]] = true;
    }
    return Object.keys(result)
}

function name2(array) {
    var result = [];
    for (let index = 0; index < array.length; index++) {
        if (!result.includes(array[index])) {
            result.push(array[index])
        }        
    }
    return result;
}

console.log(name(arr));
console.log(name1(arr));
console.log(name2(arr));