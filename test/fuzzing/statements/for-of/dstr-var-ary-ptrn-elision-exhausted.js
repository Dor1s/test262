var iter = function*() {}();
iter.next();
var iterCount = 0;
for (var [,] of [iter]) {
  
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');