var count = 0;
var callCount = 0;
var C = class {
  async *method({...x} = { get v() { count++; return 2; } }) {
    assert.sameValue(x.v, 2);
    assert.sameValue(count, 1);
    verifyEnumerable(x, "v");
    verifyWritable(x, "v");
    verifyConfigurable(x, "v");
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);