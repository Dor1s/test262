var map = new Map();
var obj = {};
var iterationCount = 0;
var first = [0, 'a'];
var second = [true, false];
var third = [null, undefined];
var fourth = [NaN, obj];
map.set(0, 'a');
map.set(true, false);
map.set(null, undefined);
map.set(NaN, obj);
for (var x of map) {
  assert.sameValue(x[0], first[0]);
  assert.sameValue(x[1], first[1]);
  first = second;
  second = third;
  third = fourth;
  fourth = null;
  iterationCount += 1;
}
assert.sameValue(iterationCount, 4);