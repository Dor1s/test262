var g = async function*() {
  yield yield 1;
};
var iter = g();
iter.next().then(function(result) {
  assert.sameValue(result.value, 1, 'First result `value`');
  assert.sameValue(result.done, false, 'First result `done` flag');
}).then(undefined, $DONE);
iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'Second result `value`');
  assert.sameValue(result.done, false, 'Second result `done` flag');
}).then(undefined, $DONE);
iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'Third result `value`');
  assert.sameValue(result.done, true, 'Thid result `done` flag');
}).then($DONE, $DONE);