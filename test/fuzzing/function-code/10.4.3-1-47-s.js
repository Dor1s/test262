var global = this;
function f1() {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}
assert(f1(), 'f1() !== true');