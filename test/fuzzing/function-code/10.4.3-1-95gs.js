var global = this;
function f() { return this===global;};
if (! ((function () {"use strict"; return f.bind()(); })())){
    throw "'this' had incorrect value!";
}