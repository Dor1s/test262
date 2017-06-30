var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
var callCount = 0;
var f;
f = function({}) {
  assert.sameValue(accessCount, 0);
  callCount = callCount + 1;
};
f(obj);
assert.sameValue(callCount, 1, 'function invoked exactly once');