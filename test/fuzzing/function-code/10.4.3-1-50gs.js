var global = this;
var f1 = function () {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
}
if (! f1()) {
    throw "'this' had incorrect value!";
}