function f1() {
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
assert(f1(), 'f1() !== true');