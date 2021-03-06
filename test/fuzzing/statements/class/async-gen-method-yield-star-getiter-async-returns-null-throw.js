var obj = {
  get [Symbol.iterator]() {
    throw new Test262Error('it should not get Symbol.iterator');
  },
  [Symbol.asyncIterator]() {
    return null;
  }
};
var callCount = 0;
class C { async *gen() {
    callCount += 1;
    yield* obj;
      throw new Test262Error('abrupt completion closes iter');
}}
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {
  throw new Test262Error('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(v.constructor, TypeError, "TypeError");
  iter.next().then(({ done, value }) => {
    assert.sameValue(done, true, 'the iterator is completed');
    assert.sameValue(value, undefined, 'value is undefined');
  }).then($DONE, $DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);