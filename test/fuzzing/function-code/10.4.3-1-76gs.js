function f() { "use strict"; return this===undefined;};
if (! (f.bind()())){
    throw "'this' had incorrect value!";
}