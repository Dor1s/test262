var thrown = new Test262Error();
var badIter = {};
var poisonedThrow = {
  next: function() {
    return { done: false };
  }
};
Object.defineProperty(poisonedThrow, 'throw', {
  get: function() {
    throw thrown;
  }
});
badIter[Symbol.iterator] = function() {
  return poisonedThrow;
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
assert.sameValue(caught, undefined, '`throw` property not accesed eagerly');
result = iter.throw();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(caught, thrown);