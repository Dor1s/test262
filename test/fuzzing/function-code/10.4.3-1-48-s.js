var global = this;
var f1 = function () {
    function f() {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
}
assert(f1(), 'f1() !== true');