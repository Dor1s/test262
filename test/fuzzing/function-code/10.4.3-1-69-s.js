var o = {};
function f() { "use strict"; return this===o;};
assert(f.apply(o), 'f.apply(o) !== true');