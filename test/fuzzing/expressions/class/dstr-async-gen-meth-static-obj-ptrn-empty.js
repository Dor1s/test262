var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
var callCount = 0;
var C = class {
  static async *method({}) {
    assert.sameValue(accessCount, 0);
    callCount = callCount + 1;
  }
};
C.method(obj).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);