var global = this;
function f() { return this;};
assert.sameValue((function () {"use strict"; return f.apply(global); })(), global);