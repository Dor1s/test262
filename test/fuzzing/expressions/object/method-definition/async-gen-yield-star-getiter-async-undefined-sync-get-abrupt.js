var calls = 0;
var reason = {};
var obj = {
  get [Symbol.iterator]() {
    throw reason;
  },
  get [Symbol.asyncIterator]() {
    calls += 1;
    return undefined;
  }
};
var callCount = 0;
var gen = {
  async *method() {
    callCount += 1;
    yield* obj;
      throw new Test262Error('abrupt completion closes iter');
  }
}.method;
var iter = gen();
iter.next().then(() => {
  throw new Test262Error('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(v, reason, 'reject reason');
  assert.sameValue(calls, 1);
  iter.next().then(({ done, value }) => {
    assert.sameValue(done, true, 'the iterator is completed');
    assert.sameValue(value, undefined, 'value is undefined');
  }).then($DONE, $DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);