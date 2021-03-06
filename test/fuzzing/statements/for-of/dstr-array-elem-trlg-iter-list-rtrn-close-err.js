var returnCount = 0;
var unreachable = 0;
var iterable = {};
var iterator = {
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
for ([ {}[yield] , ] of [iterable]) {
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
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');