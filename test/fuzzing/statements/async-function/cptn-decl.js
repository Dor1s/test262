assert.sameValue(eval('async function f() {}'), undefined);
assert.sameValue(eval('1; async function f() {}'), 1);