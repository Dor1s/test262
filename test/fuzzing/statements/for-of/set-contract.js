var set = new Set();
var iterationCount = 0;
set.add(0);
set.add(1);
for (var x of set) {
  assert.sameValue(x, 0);
  set.delete(1);
  iterationCount += 1;
}
assert.sameValue(iterationCount, 1);