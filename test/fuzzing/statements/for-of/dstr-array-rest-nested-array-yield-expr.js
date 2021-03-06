var value = [86];
var x = {};
var iterationResult, iter;
iter = (function*() {
var counter = 0;
for ([...[x[yield]]] of [[86]]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);
}());
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x.prop, undefined);
iterationResult = iter.next('prop');
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x.prop, 86);