var iterationCount = 0;
var x;
for ([x] of [[0]]) {
  assert.sameValue(x, 0);
  iterationCount += 1;
}
assert.sameValue(iterationCount, 1);