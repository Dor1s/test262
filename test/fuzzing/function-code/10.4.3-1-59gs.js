var o = {};
Object.defineProperty(o, "foo", { get: function() { "use strict"; return this; } });
if (o.foo!==o) {
    throw "'this' had incorrect value!";
}