function f() { "use strict"; return this===undefined;};
if (! (f.bind(undefined)())){
    throw "'this' had incorrect value!";
}