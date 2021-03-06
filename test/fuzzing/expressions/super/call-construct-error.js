var thrown = new Test262Error();
var caught;
function Parent() {
  throw thrown;
}
class Child extends Parent {
  constructor() {
    try {
      super();
    } catch (err) {
      caught = err;
    }
  }
}
try {
  new Child();
} catch (_) {}
assert.sameValue(caught, thrown);