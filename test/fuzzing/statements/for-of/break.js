function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;
for (var x of iterator) {
  i++;
  break;
  $ERROR('This code is unreachable.');
}
assert.sameValue(i, 1);