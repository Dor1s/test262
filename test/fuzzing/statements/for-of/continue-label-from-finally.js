function* values() {
  yield 1;
  yield 1;
}
var iterator = values();
var loop = true;
var i = 0;
outer:
while (loop) {
  loop = false;
  for (var x of iterator) {
    try {
      throw new Error();
    } catch (err) {
    } finally {
      i++;
      continue outer;
      $ERROR('This code is unreachable (following `continue` statement).');
    }
    $ERROR('This code is unreachable (following `try` statement).');
  }
  $ERROR('This code is unreachable (following `for..of` statement).');
}
assert.sameValue(i, 1);