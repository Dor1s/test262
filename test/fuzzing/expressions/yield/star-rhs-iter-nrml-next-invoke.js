var args, thisValue;
var callCount = 0;
var spyIterator = {
  next: function() {
    callCount += 1;
    args = arguments;
    thisValue = this;
    return { done: true };
  }
};
var spyIterable = {};
spyIterable[Symbol.iterator] = function() {
  return spyIterator;
};
function* g() {
  yield * spyIterable;
}
var iter = g();
iter.next(9876);
assert.sameValue(callCount, 1);
assert.sameValue(args.length, 1);
assert.sameValue(args[0], undefined);
assert.sameValue(thisValue, spyIterator);