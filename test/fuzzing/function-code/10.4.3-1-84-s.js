this.f = function()  { return this!==undefined;};
assert((function () {return new Function("\"use strict\";return f();")();})());