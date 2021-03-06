var iterable = {};
var iterator = {
  return: function() {
    return null;
  }
};
var iter;
iterable[Symbol.iterator] = function() {
  return iterator;
};
function* g() {
var result;
var vals = iterable;
result = [...{}[yield]] = vals;
assert.sameValue(result, vals);
}
iter = g();
iter.next();
assert.throws(TypeError, function() {
  iter.return();
});