var caught;
class C extends null {
  method() {
    try {
      super['x'];
    } catch (err) {
      caught = err;
    }
  }
}
C.prototype.method();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);