function f() { "use strict"; return this;};
if (f.call(this) !== this){
    throw "'this' had incorrect value!";
}