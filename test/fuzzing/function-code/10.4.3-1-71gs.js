function f() { "use strict"; return this===undefined;};
if (! f.call()){
    throw "'this' had incorrect value!";
}