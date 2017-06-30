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
var counter = 0;
for ([ {}[yield] ] of [iterable]) {
  unreachable += 1;
  counter += 1;
}
assert.sameValue(counter, 1);
}
iter = g();
iter.next();
assert.throws(TypeError, function() {
  iter.return();
});