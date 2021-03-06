var set = new Set();
var iterationCount = 0;
var first = 0;
var second = 1;
set.add(0);
set.add(1);
for (var x of set) {
  assert.sameValue(x, first);
  first = second;
  second = null;
  if (first !== null) {
    set.delete(1);
    set.add(1);
  }
  iterationCount += 1;
}
assert.sameValue(iterationCount, 2);