var iter = (function*() { throw new Test262Error(); })();
async function* f([, ...x] = iter) {
  
};
assert.throws(Test262Error, function() {
  f();
});