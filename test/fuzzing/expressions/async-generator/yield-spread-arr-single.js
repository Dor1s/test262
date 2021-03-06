var arr = ['a', 'b', 'c'];
var callCount = 0;
var gen = async function *() {
  callCount += 1;
  yield [...yield];
};
var iter = gen();
iter.next(false);
var item = iter.next(arr);
item.then(({ done, value }) => {
  assert.notSameValue(value, arr, 'value is a new array');
  assert(Array.isArray(value), 'value is an Array exotic object');
  assert.sameValue(value.length, 3)
  assert.sameValue(value[0], 'a');
  assert.sameValue(value[1], 'b');
  assert.sameValue(value[2], 'c');
  assert.sameValue(done, false);
}).then($DONE, $DONE);
assert.sameValue(callCount, 1);