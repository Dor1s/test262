var iter = (function*() { throw new Test262Error(); })();
var f;
f = async function*([, ...x]) {
  
};
assert.throws(Test262Error, function() {
  f(iter);
});