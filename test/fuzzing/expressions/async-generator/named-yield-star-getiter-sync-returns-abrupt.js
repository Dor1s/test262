var reason = {};
var obj = {
  [Symbol.iterator]() {
    throw reason;
  }
};
var callCount = 0;
var gen = async function *g() {
  callCount += 1;
  yield* obj;
    throw new Test262Error('abrupt completion closes iter');
};
var iter = gen();
iter.next().then(() => {
  throw new Test262Error('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(v, reason, "reject reason");
  iter.next().then(({ done, value }) => {
    assert.sameValue(done, true, 'the iterator is completed');
    assert.sameValue(value, undefined, 'value is undefined');
  }).then($DONE, $DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);