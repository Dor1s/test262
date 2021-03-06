var thrown = new Test262Error();
var poisonedIter = Object.defineProperty({}, Symbol.iterator, {
  get: function() {
    throw thrown;
  }
});
function* g() {
  try {
    yield * poisonedIter;
  } catch (err) {
    caught = err;
  }
}
var iter = g();
var result, caught;
assert.sameValue(caught, undefined, 'property is not accessed eagerly');
result = iter.next();
assert.sameValue(result.value, undefined, 'iteration value');
assert.sameValue(result.done, true, 'iteration status');
assert.sameValue(caught, thrown, 'error value');