function f() { "use strict"; return this===undefined;};
if (! f.apply()){
    throw "'this' had incorrect value!";
}