function f() { "use strict"; return this===undefined;};
if (! f.apply(undefined)){
    throw "'this' had incorrect value!";
}