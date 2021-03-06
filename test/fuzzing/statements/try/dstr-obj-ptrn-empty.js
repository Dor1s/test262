var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
var ranCatch = false;
try {
  throw obj;
} catch ({}) {
  assert.sameValue(accessCount, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');