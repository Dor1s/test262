var thrown = new Test262Error();
var badIter = {};
var poisonedValue = Object.defineProperty({ done: true }, 'value', {
  get: function() {
    throw thrown;
  }
});
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return poisonedValue;
    }
  };
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
assert.sameValue(caught, thrown);