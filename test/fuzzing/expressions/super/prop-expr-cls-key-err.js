var thrown = new Test262Error();
var badToString = {
  toString: function() {
    throw thrown;
  }
};
var caught;
class C {
  method() {
    try {
      super[badToString];
    } catch (err) {
      caught = err;
    }
  }
}
C.prototype.method();
assert.sameValue(caught, thrown);