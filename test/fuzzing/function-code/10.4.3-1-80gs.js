function f() { "use strict"; return this;};
if (f.bind(this)() !== this){
    throw "'this' had incorrect value!";
}