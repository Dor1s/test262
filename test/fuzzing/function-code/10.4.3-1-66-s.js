function f() { "use strict"; return this===undefined;};
assert(f.apply(), 'f.apply() !== true');