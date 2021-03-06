function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var CustomError = function() {};
var iterator = values();
var i = 0;
var error = new CustomError();
assert.throws(CustomError, function() {
  for (var x of iterator) {
    try {
      throw new Error();
    } catch (err) {
      i++;
      throw error;
      $ERROR('This code is unreachable (following `throw` statement).');
    }
    $ERROR('This code is unreachable (following `try` statement).');
  }
  $ERROR('This code is unreachable (following `for..in` statement).');
});
assert.sameValue(i, 1);