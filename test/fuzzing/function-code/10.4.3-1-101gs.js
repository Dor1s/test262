var x = 3;
function f() {
    x = this;
    return "a";
}
if ( (!(function() {"use strict"; return "ab".replace("b", f)==="aa";}())) || (x!==this)) {
     throw "'this' had incorrect value!";
}