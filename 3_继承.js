// 继承是面向对象的三大特性之一（封装 继承 多台）

// 组合继承（伪经典继承）

// 父类
// var Person = function (name, ages) {
//   this.name = name;
//   this.age = age;
// };

// Person.prototype.test = "test";
// Person.prototype.testFunc = function () {
//   console.log("func");
// };

// // 子类

// var Student = function (name, age, gender, score) {
//   Person.apply(this, [name, age]); // 盗用构造函数 绑定构造函数的this
//   this.gender = gender;
//   this.score = score;
// };

// Student.prototype = new Person(); // 改变构造函数的原型对象 变成构造函数的原型对象
// Student.prototype.teststuFuc = function () {
//   console.log("teststu");
// };

// // 测试
// var zhangsan = new Student("张三", 18, "男", 100);
// console.log(zhangsan.name); // 张三
// console.log(zhangsan.age); // 18
// console.log(zhangsan.gender); // 男
// console.log(zhangsan.score); // 100
// console.log(zhangsan.test); // this is a test
// zhangsan.testFunc(); // this is a testFunc
// zhangsan.testStuFunc(); // this is a testStuFunc

// 问题： 调用了两瓷Person
// 一次是绑定this 一次是获取构造函数的时候

// 圣杯继承
// target是子类 origin是基类
function inherit(target, origin) {
  function F() {};
  F.prototype = origin.prototype;
  target.prototype = new F();
  target.prototype.constructor = target;
}

var Person = function (name, age) {
  this.name =name;
  this.age = age;
}

Person.prototype.test = "test";
Person.prototype.testFunc = function () {
  console.log("func");
};

var Student = function (name, age, gender, score) {
  Person.apply(this, [name, age]);
  this.gender = gender;
  this.score = score;
}

inherit(Student, Person);
Student.prototype.testStuFunc = function () {
  console.log('this is a testStuFunc');
}

// 测试
var zhangsan = new Student("张三", 18, "男", 100);

console.log(zhangsan.name); // 张三
console.log(zhangsan.age); // 18
console.log(zhangsan.gender); // 男
console.log(zhangsan.score); // 100
console.log(zhangsan.test); // this is a test
zhangsan.testFunc(); // this is a testFunc
zhangsan.testStuFunc();
