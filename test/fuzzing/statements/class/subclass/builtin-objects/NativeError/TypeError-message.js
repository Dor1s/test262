class Err extends TypeError {}
Err.prototype.message = 'custom-type-error';
var err1 = new Err('foo 42');
assert.sameValue(err1.message, 'foo 42');
assert(err1.hasOwnProperty('message'));
verifyWritable(err1, 'message');
verifyNotEnumerable(err1, 'message');
verifyConfigurable(err1, 'message');
var err2 = new Err();
assert.sameValue(err2.hasOwnProperty('message'), false);
assert.sameValue(err2.message, 'custom-type-error');