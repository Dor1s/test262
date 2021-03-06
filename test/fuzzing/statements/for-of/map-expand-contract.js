var map = new Map();
var iterationCount = 0;
map.set(0, 'a');
for (var x of map) {
  assert.sameValue(x[0], 0);
  assert.sameValue(x[1], 'a');
  map.set(1, 'b');
  map.delete(1);
  iterationCount += 1;
}
assert.sameValue(iterationCount, 1);