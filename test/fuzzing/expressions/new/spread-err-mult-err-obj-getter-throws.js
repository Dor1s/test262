assert.throws(Test262Error, function() {
  new function() {}({a: 1, ...{ get foo() { throw new Test262Error(); } }});
});