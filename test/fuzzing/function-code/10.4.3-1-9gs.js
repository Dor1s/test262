var f = function () {
    return typeof this;
}
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}