function* values() {
  yield 1;
  yield 1;
}
var iterator = values();
var i = 0;
for (var x of iterator) {
  i++;
  continue;
  $ERROR('This code is unreachable.');
}
assert.sameValue(i, 2);