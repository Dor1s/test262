function f() { "use strict"; return this===undefined;};
assert(f.bind(undefined)(), 'f.bind(undefined)() !== true');