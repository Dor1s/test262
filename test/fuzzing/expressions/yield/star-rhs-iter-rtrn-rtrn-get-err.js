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
var result, caught;
iter.next();
assert.sameValue(caught, undefined, '`return` property not accessed eagerly');
result = iter.return();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(caught, thrown);
assert.sameValue(callCount, 0, 'iterator `throw` property is not accessed');