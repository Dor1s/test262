var global = this;
function f1() {
    var f = function () {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
}
assert(f1(), 'f1() !== true');