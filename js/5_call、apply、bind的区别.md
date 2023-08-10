call apply bind

call apply功能相同 传参方式不一样

fn.call(obj, arg1,arg2,..)

fn.apply(obj, [arg1, arg2, ...])

当一个函数被call apply会直接调用 bind的话创建一个新函数 在调用这个新函数时把第一个参数作为运行时的this