var global = this;
function f() { return this;};
if ((function () {"use strict"; return f.apply(global);})() !== global){
    throw "'this' had incorrect value!";
}