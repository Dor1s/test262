var badIter = {};
var throwCount = 0;
var returnCount = 0;
var hitNextStatement = false;
var hitCatch = false;
var hitFinally = false;
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
    hitNextStatement = true;
  } catch (_) {
    hitCatch = true;
  } finally {
    hitFinally = true;
  }
}
var iter = g();
iter.next();
iter.return();
assert.sameValue(throwCount, 0, '`throw` property access');
assert.sameValue(returnCount, 1, '`return` property access');
assert.sameValue(
  hitFinally, true, 'Generator execution was resumed'
);
assert.sameValue(
  hitNextStatement, false, 'Abrupt completion interrupted control flow'
);
assert.sameValue(
  hitCatch, false, 'Abrupt completion not interpreted as "throw"'
);