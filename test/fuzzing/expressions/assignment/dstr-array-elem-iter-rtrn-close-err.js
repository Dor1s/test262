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
var result;
var vals = iterable;
result = [ {}[ yield ] ] = vals;
unreachable += 1;
assert.sameValue(result, vals);
}
iter = g();
iter.next();
assert.throws(Test262Error, function() {
  iter.return();
});
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');