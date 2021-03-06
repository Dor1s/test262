var array = [0];
var iterationCount = 0;
var first = 0;
var second = 1;
for (var x of array) {
  assert.sameValue(x, first);
  first = second;
  second = null;
  if (first !== null) {
    array.push(1);
  }
  iterationCount += 1;
}
assert.sameValue(iterationCount, 2);