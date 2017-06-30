assert.sameValue((() => 1)(), 1);
assert.sameValue((a => a + 1)(1), 2);
assert.sameValue((() => { return 3; })(), 3);
assert.sameValue((a => { return a + 3; })(1), 4);
assert.sameValue(((a, b) => a + b)(1, 4), 5);
assert.sameValue(((a, b) => { return a + b; })(1, 5), 6);