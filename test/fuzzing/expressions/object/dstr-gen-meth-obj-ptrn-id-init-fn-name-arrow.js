var callCount = 0;
var obj = {
  *method({ arrow = () => {} }) {
    assert.sameValue(arrow.name, 'arrow');
    callCount = callCount + 1;
  }
};
obj.method({}).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');