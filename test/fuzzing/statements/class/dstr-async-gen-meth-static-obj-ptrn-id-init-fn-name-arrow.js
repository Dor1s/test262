var callCount = 0;
class C {
  static async *method({ arrow = () => {} }) {
    assert.sameValue(arrow.name, 'arrow');
    callCount = callCount + 1;
  }
};
C.method({}).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);