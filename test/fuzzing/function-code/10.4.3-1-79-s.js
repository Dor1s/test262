var o = {};
function f() { "use strict"; return this===o;};
assert(f.bind(o)(), 'f.bind(o)() !== true');