var g = async function*() {};
(async function*() {
  yield*
  g();
})().next().then(function(result) {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
}).then($DONE, $DONE);