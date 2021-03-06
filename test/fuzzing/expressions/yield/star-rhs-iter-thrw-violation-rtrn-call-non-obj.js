var badIter = {};
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    return: function() {
      return 87;
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
var caught;
iter.next();
iter.throw();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);