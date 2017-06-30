var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var f = async function*([x] = iter) {
  
};
assert.throws(Test262Error, function() {
  f();
});