this.f = function()  { "use strict"; return this===undefined;};
assert((new Function("return f();"))());