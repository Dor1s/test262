var array = [0, 1];
var iterationCount = 0;
for (var x of array) {
  assert.sameValue(x, 0);
  array.pop();
  iterationCount += 1;
}
assert.sameValue(iterationCount, 1);