var f = new Function("\"use strict\";\nreturn typeof this;");
if (f() !== "undefined") {
    throw "'this' had incorrect value!";
}