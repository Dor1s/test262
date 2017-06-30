var callCount = 0;
var f;
f = async function*([[x, y, z] = [4, 5, 6]]) {
  assert.sameValue(x, 7);
  assert.sameValue(y, 8);
  assert.sameValue(z, 9);
  callCount = callCount + 1;
};
f([[7, 8, 9]]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);