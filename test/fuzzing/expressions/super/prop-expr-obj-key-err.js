var thrown = new Test262Error();
var badToString = {
  toString: function() {
    throw thrown;
  }
};
var caught;
var obj = {
  method() {
    try {
      super[badToString];
    } catch (err) {
      caught = err;
    }
  }
};
obj.method();
assert.sameValue(caught, thrown);