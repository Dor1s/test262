var global = this;
var f1 = function () {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}
assert(f1(), 'f1() !== true');