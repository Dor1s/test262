var global = this;
if (! ((function () {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===global);
})())) {
    throw "'this' had incorrect value!";
}