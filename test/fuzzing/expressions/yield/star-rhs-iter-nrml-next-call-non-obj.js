var badIter = {};
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return 8;
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
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);