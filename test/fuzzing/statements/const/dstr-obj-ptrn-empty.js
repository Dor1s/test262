var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
const {} = obj;
assert.sameValue(accessCount, 0);