function f() { "use strict"; return this===null;};
if (! f.apply(null)){
    throw "'this' had incorrect value!";
}