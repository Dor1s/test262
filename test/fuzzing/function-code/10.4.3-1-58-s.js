var o = {};
Object.defineProperty(o, "foo",  { get: function() { return this; } });
assert.sameValue(o.foo, o, 'o.foo');