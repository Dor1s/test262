function f() { "use strict"; return this===undefined;};
assert(f.call(undefined), 'f.call(undefined) !== true');