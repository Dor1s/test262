var obj = {
  get [Symbol.iterator]() {
    throw new Test262Error('it should not get Symbol.iterator');
  },
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: 39,
          value: 42,
          done: false
        }
      }
    };
  }
};
var callCount = 0;
var gen = async function *() {
  callCount += 1;
  yield* obj;
    throw new Test262Error('completion closes iter');
};
var iter = gen();
iter.next().then(({ value, done }) => {
  assert.sameValue(value, 42);
  assert.sameValue(done, false);
}).then($DONE, $DONE);
assert.sameValue(callCount, 1);