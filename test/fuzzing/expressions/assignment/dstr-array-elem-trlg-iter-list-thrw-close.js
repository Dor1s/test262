var nextCount = 0;
var returnCount = 0;
var thisValue = null;
var args = null;
var iterable = {};
var thrower = function() {
  throw new Test262Error();
};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
assert.throws(Test262Error, function() {
  0, [ {}[thrower()] , ] = iterable;
});
assert.sameValue(nextCount, 0);
assert.sameValue(returnCount, 1);
assert.sameValue(thisValue, iterator, 'correct `this` value');
assert(!!args, 'arguments object provided');
assert.sameValue(args.length, 0, 'zero arguments specified');