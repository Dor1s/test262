assert.throws(Test262Error, function() {
  (function() {}({a: 1, ...{ get foo() { throw new Test262Error(); } }}));
});