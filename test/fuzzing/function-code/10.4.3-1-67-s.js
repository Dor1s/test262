function f() { "use strict"; return this===null;};
assert(f.apply(null), 'f.apply(null) !== true');