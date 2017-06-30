assert.throws(Test262Error, function() {
  [{a: 1, ...{ get foo() { throw new Test262Error(); } }}];
});