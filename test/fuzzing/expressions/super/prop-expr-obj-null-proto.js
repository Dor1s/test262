var caught;
var obj = {
  method() {
    try {
      super['x'];
    } catch (err) {
      caught = err;
    }
  }
};
Object.setPrototypeOf(obj, null);
obj.method();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);