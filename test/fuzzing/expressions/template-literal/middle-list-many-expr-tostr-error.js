var obj = {
  toString: function() {
    throw new Test262Error();
  }
};
assert.throws(Test262Error, function() {
  `${0} ${1} ${obj}`;
});