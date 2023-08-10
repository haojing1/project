function getType(params) {
    let type = typeof params;
    if (type == 'object') {
    return Object.prototype.toString.call(params).slice(8,-1)
    }
    return type
}
    function Person(){}
console.log(getType(1)); // number
console.log(getType(true)); // boolean
console.log(getType([1,2,3])); // Array
console.log(getType(/abc/)); // RegExp
console.log(getType(new Date)); // Date
console.log(getType(new Person)); // Object
console.log(getType({})); // Object
