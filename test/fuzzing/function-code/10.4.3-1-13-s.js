var f = Function("return typeof this;");
assert.notSameValue(f(), "undefined", 'f()');