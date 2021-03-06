var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var x;
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
    throw new Test262Error();
  }
};
var iter;
iterable[Symbol.iterator] = function() {
  return iterator;
};
function* g() {
var counter = 0;
for ([ x , ...{}[yield] ] of [iterable]) {
  unreachable += 1;
  counter += 1;
}
assert.sameValue(counter, 1);
}
iter = g();
iter.next();
assert.throws(Test262Error, function() {
  iter.return();
});
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');