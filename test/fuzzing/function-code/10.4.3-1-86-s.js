var global = this;
function f() { return this===global;};
assert((function () {"use strict"; return f.apply(null);})());