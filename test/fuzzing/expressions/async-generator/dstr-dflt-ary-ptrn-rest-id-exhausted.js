var callCount = 0;
var f;
f = async function*([, , ...x] = [1, 2]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);