assert.sameValue(eval('class C {}'), undefined);
assert.sameValue(eval('1; class C {}'), 1);