var o = {};
var x = 2;
Object.defineProperty(o, "foo", { set: function(stuff) { x=this; } });
o.foo = 3;
if (x!==o) {
    throw "'this' had incorrect value!";
}