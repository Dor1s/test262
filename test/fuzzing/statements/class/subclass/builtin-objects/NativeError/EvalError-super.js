class CustomError extends EvalError {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new CustomError();
});