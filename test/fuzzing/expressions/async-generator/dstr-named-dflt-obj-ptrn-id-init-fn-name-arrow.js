var callCount = 0;
var f;
f = async function* h({ arrow = () => {} } = {}) {
  assert.sameValue(arrow.name, 'arrow');
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);