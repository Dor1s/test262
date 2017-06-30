var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
var f;
f = async function*([[,] = g()] = [[]]) {
  assert.sameValue(callCount, 0);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);