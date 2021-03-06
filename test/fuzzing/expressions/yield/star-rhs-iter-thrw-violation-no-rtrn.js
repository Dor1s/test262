var badIter = {};
var throwCount = 0;
var returnCount = 0;
var spyResult = {
  next: function() {
    return { done: false };
  }
};
Object.defineProperty(spyResult, 'throw', {
  get: function() {
    throwCount += 1;
  }
});
Object.defineProperty(spyResult, 'return', {
  get: function() {
    returnCount += 1;
  }
});
badIter[Symbol.iterator] = function() {
  return spyResult;
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
assert.sameValue(throwCount, 1, '`throw` property access');
assert.sameValue(returnCount, 1, '`return` property access');
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);