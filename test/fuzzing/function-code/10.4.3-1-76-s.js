function f() { "use strict"; return this===undefined;};
assert(f.bind()(), 'f.bind()() !== true');