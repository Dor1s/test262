var o = {};
Object.defineProperty(o, "foo", { get: function() { "use strict"; return this; } });
assert.sameValue(o.foo, o, 'o.foo');