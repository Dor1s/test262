class CustomError extends TypeError {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new CustomError();
});