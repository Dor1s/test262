var o = {};
function f() { "use strict"; return this===o;};
if (! f.apply(o)){
    throw "'this' had incorrect value!";
}