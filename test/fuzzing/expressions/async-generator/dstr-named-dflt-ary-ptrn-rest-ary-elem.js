var callCount = 0;
var f;
f = async function* h([...[x, y, z]] = [3, 4, 5]) {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);