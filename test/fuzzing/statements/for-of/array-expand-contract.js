var array = [0];
var iterationCount = 0;
for (var x of array) {
  assert.sameValue(x, 0);
  array.push(1);
  array.pop();
  iterationCount += 1;
}
assert.sameValue(iterationCount, 1);