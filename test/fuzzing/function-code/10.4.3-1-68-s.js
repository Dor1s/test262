function f() { "use strict"; return this===undefined;};
assert(f.apply(undefined), 'f.apply(undefined) !== true');