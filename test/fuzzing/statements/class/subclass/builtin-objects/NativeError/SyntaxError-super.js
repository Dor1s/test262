class CustomError extends SyntaxError {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new CustomError();
});