function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;
var result = (function() {
  for (var x of iterator) {
    try {
      throw new Error();
    } catch(err) {
      i++;
      return 34;
      $ERROR('This code is unreachable (following `return` statement).');
    }
    $ERROR('This code is unreachable (following `try` statement).');
  }
  $ERROR('This code is unreachable (following `for..in` statement).');
})();
assert.sameValue(result, 34);
assert.sameValue(i, 1);