function f() { return this!==undefined;};
function foo() { "use strict"; return f();}
assert(foo(), 'foo() !== true');