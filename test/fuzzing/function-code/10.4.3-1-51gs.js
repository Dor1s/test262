var global = this;
if (! ((function () {
    function f() {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
})())) {
    throw "'this' had incorrect value!";
}