function f() { "use strict"; return this===null;};
assert(f.call(null), 'f.call(null) !== true');