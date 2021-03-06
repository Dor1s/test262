var callCount = 0;
var f;
f = async function*([...{ length }] = [1, 2, 3]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);