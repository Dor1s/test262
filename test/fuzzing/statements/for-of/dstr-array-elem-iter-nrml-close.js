var nextCount = 0;
var returnCount = 0;
var thisValue = null;
var args = null;
var _;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return: function() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var counter = 0;
for ([ _ ] of [iterable]) {
  assert.sameValue(nextCount, 1);
  assert.sameValue(returnCount, 1);
  assert.sameValue(thisValue, iterator, 'correct `this` value');
  assert(!!args, 'arguments object provided');
  assert.sameValue(args.length, 0, 'zero arguments specified');
  counter += 1;
}
assert.sameValue(counter, 1);