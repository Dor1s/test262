var f = new Function("return typeof this;");
assert.notSameValue(f(), "undefined", 'f()');