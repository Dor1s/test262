var callCount = 0;
var gen = function *() {
  callCount += 1;
  return (function(arg) {
      var yield = arg + 1;
      return yield;
    }(yield))
};
var iter = gen();
var item = iter.next();
assert.sameValue(item.done, false);
assert.sameValue(item.value, undefined);
item = iter.next(42);
assert.sameValue(item.done, true);
assert.sameValue(item.value, 43);
assert.sameValue(callCount, 1);