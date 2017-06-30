let error = new Error();
async function * readFile() {
  yield Promise.reject(error);
  yield "unreachable";
}
var callCount = 0;
var C = class { async *gen() {
    callCount += 1;
    yield * readFile();
}}
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {
  throw new Test262Error("Promise incorrectly resolved.");
}, rejectValue => {
  // yield Promise.reject(error);
  assert.sameValue(rejectValue, error);
  iter.next().then(({done, value}) => {
    // iter is closed now.
    assert.sameValue(done, true, "The value of IteratorResult.done is `true`");
    assert.sameValue(value, undefined, "The value of IteratorResult.value is `undefined`");
  }).then($DONE, $DONE);
}).then($DONE, $DONE);
assert.sameValue(callCount, 1);