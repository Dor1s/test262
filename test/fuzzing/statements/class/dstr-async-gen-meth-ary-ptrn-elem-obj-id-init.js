var callCount = 0;
class C {
  async *method([{ x, y, z } = { x: 44, y: 55, z: 66 }]) {
    assert.sameValue(x, 44);
    assert.sameValue(y, 55);
    assert.sameValue(z, 66);
    callCount = callCount + 1;
  }
};
new C().method([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);