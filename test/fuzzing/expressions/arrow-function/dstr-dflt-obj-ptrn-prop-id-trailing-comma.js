var callCount = 0;
var f;
f = ({ x: y, } = { x: 23 }) => {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');