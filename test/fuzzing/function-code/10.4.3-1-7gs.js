function f() {
    return typeof this;
}
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}