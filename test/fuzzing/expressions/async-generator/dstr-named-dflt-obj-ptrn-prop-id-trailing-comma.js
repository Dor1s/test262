var callCount = 0;
var f;
f = async function* h({ x: y, } = { x: 23 }) {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);