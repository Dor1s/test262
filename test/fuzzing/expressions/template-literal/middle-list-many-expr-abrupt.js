assert.throws(Test262Error, function() {
  `${0}${1}${function() { throw new Test262Error(); }()}`;
});