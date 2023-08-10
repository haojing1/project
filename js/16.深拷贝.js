function deepClone(o1, o2) {
    // for (let k in o2) {
    //     if (typeof o2[k] === 'object') {
    //         o1[k] = {};
    //         deepClone(o1[k], o2[k]);
    //     } else {
    //         o1[k] = o2[k];
    //     }
    // }

    for(let i in o2){
        if (typeof o2[i] == 'object') {
            o1[i] = {}
            deepClone( o1[i],o2[i])
        }else{
            o1[i] = o2[i]
        }
    }
}
// 测试用例
let obj = {
    a: 1,
    b: [1, 2, 3],
    c: {}
};
let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
console.log(emptyObj.a == obj.a);
console.log(emptyObj.b == obj.b);
