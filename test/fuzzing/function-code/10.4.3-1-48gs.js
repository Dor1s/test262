var global = this;
var f1 = function () {
    function f() {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===global);
}
if (! f1()) {
    throw "'this' had incorrect value!";
}