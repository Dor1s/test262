var o = { get foo() { "use strict"; return this; } }
assert.sameValue(o.foo, o, 'o.foo');