var caught;
class C {
  method() {
    super.x = 8;
    Object.freeze(C.prototype);
    try {
      super.y = 9;
    } catch (err) {
      caught = err;
    }
  }
}
C.prototype.method();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);