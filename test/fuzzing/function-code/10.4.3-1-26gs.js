var obj = new (function () {
    "use strict";
    return this;
});
if ((obj === this) || (typeof obj === "undefined")) {
    throw "'this' had incorrect value!";
}