function f1() {
    "use strict";
    return ((function () {
        return typeof this;
    })()==="undefined") && ((typeof this)==="undefined");
}
assert(f1(), 'f1() !== true');