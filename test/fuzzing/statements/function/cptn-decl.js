assert.sameValue(eval('function f() {}'), undefined);
assert.sameValue(eval('1; function f() {}'), 1);