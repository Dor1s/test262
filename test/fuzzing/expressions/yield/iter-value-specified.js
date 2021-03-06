function* g() { actual = yield; }
var expected = {};
var iter = g();
var actual, result;
result = iter.next();
assert.sameValue(result.value, undefined, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
assert.sameValue(
  actual, undefined, 'Value of `yield` expression (prior to continuation)'
);
result = iter.next(expected);
assert.sameValue(result.value, undefined, 'Second result `value`');
assert.sameValue(result.done, true, 'Second result `done` flag');
assert.sameValue(
  actual, expected, 'Value of `yield` expression (following continuation)'
);