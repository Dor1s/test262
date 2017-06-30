var thrown = new Test262Error();
var caught;
function thrower() {
  throw thrown;
}
class C {
  method() {
    try {
      super[thrower()];
    } catch (err) {
      caught = err;
    }
  }
}
C.prototype.method();
assert.sameValue(caught, thrown);