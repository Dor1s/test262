var iter = function*() {}();
iter.next();
var iterCount = 0;
for (const [,] of [iter]) {
  
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');