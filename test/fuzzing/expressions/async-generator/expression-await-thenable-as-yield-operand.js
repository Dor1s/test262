var thenable = {
  then: function(resolve, reject) {
    resolve("a");
  }
};
var iter = (async function*() {
  yield await thenable;
})();
iter.next().then(function(result) {
  assert.sameValue(result.value, "a", 'First result `value`');
  assert.sameValue(result.done, false, 'First result `done` flag');
}).then(undefined, $DONE);
iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'Second result `value`');
  assert.sameValue(result.done, true, 'Second result `done` flag');
}).then($DONE, $DONE);