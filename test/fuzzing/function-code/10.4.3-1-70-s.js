function f() { "use strict"; return this;};
assert.sameValue(f.apply(this), this, 'f.apply(this)');