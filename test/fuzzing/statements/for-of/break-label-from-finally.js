function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;
outer:
while (true) {
  for (var x of iterator) {
    try {
    } finally {
      i++;
      break outer;
      $ERROR('This code is unreachable (following `break` statement).');
    }
    $ERROR('This code is unreachable (following `try` statement).');
  }
  $ERROR('This code is unreachable (following `for..of` statement).');
}
assert.sameValue(i, 1);