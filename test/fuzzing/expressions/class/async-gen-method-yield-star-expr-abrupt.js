var obj = {};
var abrupt = function() {
  throw obj;
};
var callCount = 0;
var C = class { async *gen() {
    callCount += 1;
    yield* abrupt();
      throw new Test262Error('abrupt completion closes iter');
}}
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {
  throw new Test262Error('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(v, obj, "reject reason");
  iter.next().then(({ done, value }) => {
    assert.sameValue(done, true, 'the iterator is completed');
    assert.sameValue(value, undefined, 'value is undefined');
  }).then($DONE, $DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);