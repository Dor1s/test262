var callCount = 0;
var f;
f = async function*({ x, }) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f({ x: 23 }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);