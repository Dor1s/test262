function f() { "use strict"; return this===undefined;};
assert(f.call(), 'f.call() !== true');