class CustomError extends ReferenceError {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new CustomError();
});