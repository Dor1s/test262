var callCount = 0;
async function* f({ w: [x, y, z] = [4, 5, 6] }) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f({}).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);