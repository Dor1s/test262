assert.throws(Test262Error, function() {
  (function() {}({...{ get foo() { throw new Test262Error(); } }}));
});