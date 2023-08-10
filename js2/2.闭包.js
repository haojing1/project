// let num = 1


// // 内部环境可以用作用域链访问到外部环境，但外部环境无法访问内部环境中的变量和函数
// function getNum() {
//     let num = 11
//     num++
//     console.log(num);
// }

// // 如果声明在外部，可以满足需求，但全局变量就会有被污染的可能，也不可行。

// // 就是在一个函数内部创建另一个函数

// // 有权利访问另一个函数作用域中的变量和函数
// getNum();
// console.log(num);

function outer() {
    let ticket = 0
    return function () {
        ticket++
        console.log(ticket);
    }
}


let getNum = outer();
// 获取return这个函数 这个函数又必须要访问当前所在函数的值
getNum()
getNum()
ticket = 1
getNum()
getNum()


getNum = null