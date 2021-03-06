var thrown = new Test262Error();
var badIter = {};
badIter[Symbol.iterator] = function() {
  throw thrown;
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
assert.sameValue(caught, undefined, 'method is not invoked eagerly');
result = iter.next();
assert.sameValue(result.value, undefined, 'iteration value');
assert.sameValue(result.done, true, 'iteration status');
assert.sameValue(caught, thrown, 'error value');