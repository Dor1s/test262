var thrown = new Test262Error();
var badIter = {};
var poisonedNext = Object.defineProperty({}, 'next', {
  get: function() {
    throw thrown;
  }
});
badIter[Symbol.iterator] = function() {
  return poisonedNext;
};
function* g() {
  try {
    yield * badIter;
  } catch (err) {
    caught = err;
  }
}
var iter = g();
var result, caught;
result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(caught, thrown);