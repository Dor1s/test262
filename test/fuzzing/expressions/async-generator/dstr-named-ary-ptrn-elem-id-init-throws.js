var f;
f = async function* g([x = (function() { throw new Test262Error(); })()]) {
  
};
assert.throws(Test262Error, function() {
  f([undefined]);
});