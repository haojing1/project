instanceof1 =  (A,B) => {
    val1 = A.__proto__
    val2 = B.prototype;
    if (val1 == val2) {
        return true
    }
    return false
}