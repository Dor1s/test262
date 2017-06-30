var iterationResult, iter, x;
iter = (function*() {
var result;
var vals = [{}];
result = [{ x = yield }] = vals;
assert.sameValue(result, vals);
}());
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x, undefined);
iterationResult = iter.next(4);
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x, 4);