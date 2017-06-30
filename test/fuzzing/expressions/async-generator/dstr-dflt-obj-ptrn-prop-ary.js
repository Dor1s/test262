var callCount = 0;
var f;
f = async function*({ w: [x, y, z] = [4, 5, 6] } = { w: [7, undefined, ] }) {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);