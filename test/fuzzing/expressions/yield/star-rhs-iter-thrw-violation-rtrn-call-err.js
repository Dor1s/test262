var badIter = {};
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    return: function() {
      // Using a primitive completion value ensures that the check for the type
      // of the completion value (and resulting TypeError) occurs *after* the
      // check for the type of the completion itself (which is the behavior
      // under test).
      throw 87;
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
assert.sameValue(caught, 87);