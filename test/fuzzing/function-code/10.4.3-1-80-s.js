function f() { "use strict"; return this;};
assert.sameValue(f.bind(this)(), this, 'f.bind(this)()');