var iter = function*() {}();
iter.next();
var iterCount = 0;
for (let [,] = iter; iterCount < 1; ) {
  
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');