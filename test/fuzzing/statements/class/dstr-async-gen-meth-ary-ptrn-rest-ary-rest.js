var values = [1, 2, 3];
var callCount = 0;
class C {
  async *method([...[...x]]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 3);
    assert.sameValue(x[0], 1);
    assert.sameValue(x[1], 2);
    assert.sameValue(x[2], 3);
    assert.notSameValue(x, values);
    callCount = callCount + 1;
  }
};
new C().method(values).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);