var global = this;
if (! ((function () {
    var f = function () {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
})())) {
    throw "'this' had incorrect value!";
}