var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
var callCount = 0;
class C {
  *method({}) {
    assert.sameValue(accessCount, 0);
    callCount = callCount + 1;
  }
};
new C().method(obj).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');