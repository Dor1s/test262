var doneCallCount = 0;
var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next() {
      return { value: null, done: true };
    },
    return() {
      doneCallCount += 1;
      return {};
    }
  };
};
var iterCount = 0;
async function *fn() {
  for await (var [x] of [iter]) {
    assert.sameValue(doneCallCount, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);