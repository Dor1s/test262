function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;
for (var x of iterator) {
  try {
    i++;
    break;
    $ERROR('This code is unreachable (following `break` statement).');
  } catch (err) {}
  $ERROR('This code is unreachable (following `try` statement).');
}
assert.sameValue(i, 1);