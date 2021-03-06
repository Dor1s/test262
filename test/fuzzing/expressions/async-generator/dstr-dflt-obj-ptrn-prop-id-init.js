var callCount = 0;
var f;
f = async function*({ x: y = 33 } = { }) {
  assert.sameValue(y, 33);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);