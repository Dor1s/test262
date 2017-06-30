assert.throws(Test262Error, function() {
  new function() {}({...{ get foo() { throw new Test262Error(); } }});
});