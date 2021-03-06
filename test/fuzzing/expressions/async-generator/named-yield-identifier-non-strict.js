var callCount = 0;
var gen = async function *g() {
  callCount += 1;
  return (function(arg) {
      var yield = arg + 1;
      return yield;
    }(yield))
};
var iter = gen();
var item = iter.next();
item.then(({ done, value }) => {
  assert.sameValue(done, false);
  assert.sameValue(value, undefined);
});
item = iter.next(42);
item.then(({ done, value }) => {
  assert.sameValue(done, true);
  assert.sameValue(value, 43);
}).then($DONE, $DONE);
assert.sameValue(callCount, 1);