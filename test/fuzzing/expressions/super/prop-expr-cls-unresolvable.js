var caught;
class C {
  method() {
    try {
      super[test262unresolvable];
    } catch (err) {
      caught = err;
    }
  }
}
C.prototype.method();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, ReferenceError);