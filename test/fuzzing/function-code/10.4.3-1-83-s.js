this.f = function() {return this!==undefined;};
assert((function () {return Function("\"use strict\";return f();")();})());