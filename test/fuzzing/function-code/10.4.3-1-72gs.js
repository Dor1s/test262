function f() { "use strict"; return this===null;};
if (! f.call(null)){
    throw "'this' had incorrect value!";
}