function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;
var result = (function() {
  for (var x of iterator) {
    try {
      i++;
      return 34;
      $ERROR('This code is unreachable (following `return` statement).');
    } catch(err) {
      $ERROR('This code is unreachable (within `catch` block).');
    }
    $ERROR('This code is unreachable (following `try` statement).');
  }
  $ERROR('This code is unreachable (following `for..in` statement).');
})();
assert.sameValue(result, 34);
assert.sameValue(i, 1);