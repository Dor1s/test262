var global = this;
function f1() {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}
if (! f1()) {
    throw "'this' had incorrect value!";
}