var o = {};
function f() { "use strict"; return this===o;};
assert(f.call(o), 'f.call(o) !== true');