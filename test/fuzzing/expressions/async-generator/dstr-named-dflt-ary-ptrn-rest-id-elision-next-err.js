var iter = (function*() { throw new Test262Error(); })();
var f;
f = async function* h([, ...x] = iter) {
  
};
assert.throws(Test262Error, function() {
  f();
});