var x = 2;
var o = { set foo(stuff) { x=this; } }
o.foo = 3;
if (x!==o) {
    throw "'this' had incorrect value!";
}