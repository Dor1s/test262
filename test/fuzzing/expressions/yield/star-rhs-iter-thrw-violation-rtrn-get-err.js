var thrown = new Test262Error();
var badIter = {};
var callCount = 0;
var poisonedReturn = {
  next: function() {
    return { done: false };
  }
};
Object.defineProperty(poisonedReturn, 'throw', {
  get: function() {
    callCount += 1;
  }
});
Object.defineProperty(poisonedReturn, 'return', {
  get: function() {
    throw thrown;
  }
});
badIter[Symbol.iterator] = function() {
  return poisonedReturn;
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
assert.sameValue(callCount, 1);
assert.sameValue(caught, thrown);