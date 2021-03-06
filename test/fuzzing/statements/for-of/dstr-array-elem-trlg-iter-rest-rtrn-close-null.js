var nextCount = 0;
var iterable = {};
var x;
var iterator = {
  next: function() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
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
for ([ x , ...{}[yield] ] of [iterable]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);
}
iter = g();
iter.next();
assert.throws(TypeError, function() {
  iter.return();
});
assert.sameValue(nextCount, 1);