var thrown = new Test262Error();
var badIter = {};
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    return: function() {
      throw thrown;
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
iter.next();
result = iter.return();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(caught, thrown);