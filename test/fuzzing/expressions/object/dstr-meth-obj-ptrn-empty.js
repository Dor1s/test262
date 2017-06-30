var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
var callCount = 0;
var obj = {
  method({}) {
    assert.sameValue(accessCount, 0);
    callCount = callCount + 1;
  }
};
obj.method(obj);
assert.sameValue(callCount, 1, 'method invoked exactly once');