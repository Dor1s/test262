var value = [[22]];
var x = {};
var iterationResult, iter;
iter = (function*() {
var result;
var vals = value;
result = [[x[yield]]] = vals;
assert.sameValue(result, vals);
}());
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x.prop, undefined);
iterationResult = iter.next('prop');
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x.prop, 22);