var f1 = function () {
    function f() {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
assert(f1(), 'f1() !== true');