throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
for (const [...[x], y] = [1, 2, 3]; iterCount < 1; ) {
  
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');