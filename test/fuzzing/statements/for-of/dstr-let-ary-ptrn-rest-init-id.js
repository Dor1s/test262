throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
for (let [...x = []] of [[]]) {
  
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');