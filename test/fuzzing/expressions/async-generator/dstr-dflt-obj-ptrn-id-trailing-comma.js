var callCount = 0;
var f;
f = async function*({ x, } = { x: 23 }) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);