function f() { "use strict"; return this;};
if (f.apply(this) !== this){
    throw "'this' had incorrect value!";
}