function* g() {
  yield* 'abc';
}
var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, 'a', 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, 'b', 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
result = iter.next();
assert.sameValue(result.value, 'c', 'Third result `value`');
assert.sameValue(result.done, false, 'Third result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Final result `value`');
assert.sameValue(result.done, true, 'Final result `done` flag');