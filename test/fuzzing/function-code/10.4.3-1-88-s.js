var o = {};
function f() { return this===o;};
assert((function () {"use strict"; return f.apply(o);})());