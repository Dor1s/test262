var map = new Map();
var iterationCount = 0;
var first = [0, 'a'];
var second = [1, 'b'];
map.set(0, 'a');
for (var x of map) {
  assert.sameValue(x[0], first[0]);
  assert.sameValue(x[1], first[1]);
  first = second;
  second = null;
  map.set(1, 'b');
  iterationCount += 1;
}
assert.sameValue(iterationCount, 2);