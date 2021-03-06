var obj = {
  get [Symbol.iterator]() {
    throw new Test262Error('it should not get Symbol.iterator');
  },
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: undefined,
          value: 42,
          done: false
        }
      }
    };
  }
};
var callCount = 0;
class C { static async *gen() {
    callCount += 1;
    yield* obj;
      throw new Test262Error('completion closes iter');
}}
var gen = C.gen;
var iter = gen();
iter.next().then(({ value, done }) => {
  assert.sameValue(value, 42);
  assert.sameValue(done, false);
}).then($DONE, $DONE);
assert.sameValue(callCount, 1);