var caught;
class C extends Object {
  constructor() {
    try {
      delete super.x;
    } catch (err) {
      caught = err;
    }
  }
}
try {
  new C();
} catch (_) {}
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, ReferenceError);