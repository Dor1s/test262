var f;
f = async function* h([x = (function() { throw new Test262Error(); })()] = [undefined]) {
  
};
assert.throws(Test262Error, function() {
  f();
});