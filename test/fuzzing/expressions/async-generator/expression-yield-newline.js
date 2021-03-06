var g = async function*() {
  yield
  1;
};
var iter = g();
iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'First result `value`');
  assert.sameValue(result.done, false, 'First result `done` flag');
}).then(undefined, $DONE);
iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'Second result `value`');
  assert.sameValue(result.done, true, 'Second result `done` flag');
}).then($DONE, $DONE);