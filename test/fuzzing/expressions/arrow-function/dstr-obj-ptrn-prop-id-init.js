var callCount = 0;
var f;
f = ({ x: y = 33 }) => {
  assert.sameValue(y, 33);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f({ });
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');