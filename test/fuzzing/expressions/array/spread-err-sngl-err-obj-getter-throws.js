assert.throws(Test262Error, function() {
  [{...{ get foo() { throw new Test262Error(); } }}];
});