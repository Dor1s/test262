class CustomError extends RangeError {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new CustomError();
});