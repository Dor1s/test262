class CustomError extends Error {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new CustomError('foo');
});