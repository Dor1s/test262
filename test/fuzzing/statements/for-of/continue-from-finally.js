function* values() {
  yield 1;
  yield 1;
}
var iterator = values();
var i = 0;
for (var x of iterator) {
  try {
    throw new Error();
  } catch (err) {
  } finally {
    i++;
    continue;
    $ERROR('This code is unreachable (following `continue` statement).');
  }
  $ERROR('This code is unreachable (following `try` statement).');
}
assert.sameValue(i, 2);