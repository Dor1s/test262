var global = this;
function f() { return this===global;};
if (! ((function () {"use strict"; return f.bind(undefined)(); })())){
    throw "'this' had incorrect value!";
}