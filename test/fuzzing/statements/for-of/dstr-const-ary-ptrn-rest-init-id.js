throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
for (const [...x = []] of [[]]) {
  
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');