var o = {};
Object.defineProperty(o, "foo",  { get : function() { return this; } });
if (o.foo!==o) {
    throw "'this' had incorrect value!";
}