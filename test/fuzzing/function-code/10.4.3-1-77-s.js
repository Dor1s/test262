function f() { "use strict"; return this===null;};
assert(f.bind(null)(), 'f.bind(null)() !== true');