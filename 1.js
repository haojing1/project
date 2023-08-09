// class Example {
//     constructor(name){
//         this.name = name;
//     }
//     init() {
//         const fun = () => {console.log(this.name);}
//         fun()
//     }
// }

function Example(name) {
    this.name = name;
}

Object.defineProperty(Example.prototype, 'init', {
    enumerable: false,
    value: function () {
        var fun = function () {
            console.log(this.name);
        }
        fun.call(this);
    }
})