var f = Function("\"use strict\";\nreturn typeof this;");
assert.sameValue(f(), "undefined", 'f()');