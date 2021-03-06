var thrown = new Test262Error();
var thrower = function() {
  throw thrown;
};
var caught;
class C extends Object {
  constructor() {
    try {
      super(thrower());
    } catch (err) {
      caught = err;
    }
  }
}
try {
  new C();
} catch (_) {}
assert.sameValue(caught, thrown);