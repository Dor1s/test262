var iterationCount = 0;
var array = new Uint8Array([3, 2, 4, 1]);
var first = 3;
var second = 2;
var third = 4;
var fourth = 1;
for (var x of array) {
  assert.sameValue(x, first);
  first = second;
  second = third;
  third = fourth;
  fourth = null;
  iterationCount += 1;
}
assert.sameValue(iterationCount, 4);