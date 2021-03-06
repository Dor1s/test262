var badIter = {};
var throwCount = 0;
var thisValue, args;
var poisonedReturn = {
  next: function() {
    return { done: false };
  },
  return: function() {
    thisValue = this;
    args = arguments;
    return 'this value has no effect on the protocol';
  }
};
Object.defineProperty(poisonedReturn, 'throw', {
  get: function() {
    throwCount += 1;
  }
});
badIter[Symbol.iterator] = function() {
  return poisonedReturn;
};
function* g() {
  try {
    yield * badIter;
  } catch (err) {
    caught = err;
  }
}
var iter = g();
var caught;
iter.next();
iter.throw();
assert.sameValue(throwCount, 1);
assert.sameValue(thisValue, poisonedReturn, '"this" value');
assert.sameValue(
  typeof args, 'object', 'method invoked, arguments object provided'
);
assert.sameValue(args.length, 0);
assert.sameValue(typeof caught, 'object', 'object value thrown');
assert.sameValue(caught.constructor, TypeError);