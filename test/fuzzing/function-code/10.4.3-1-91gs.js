var global = this;
function f() { return this===global;};
if (! ((function () {"use strict"; return f.call(null); })())){
    throw "'this' had incorrect value!";
}