class CustomError extends Error {}
var err = new CustomError('foo 42');
assert.sameValue(err.message, 'foo 42');
assert.sameValue(err.name, 'Error');