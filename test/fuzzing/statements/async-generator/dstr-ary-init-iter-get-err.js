var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
async function* f([x]) {
  
};
assert.throws(Test262Error, function() {
  f(iter);
});