var obj = new (function () {
    return this;
});
if ((obj === this) || (typeof obj === "undefined")) {
    throw "'this' had incorrect value!";
}