var o = {};
function f() { "use strict"; return this===o;};
if (! (f.bind(o)())){
    throw "'this' had incorrect value!";
}