var caught;
var obj = {
  method() {
    super['x'] = 8;
    Object.freeze(obj);
    try {
      super['y'] = 9;
    } catch (err) {
      caught = err;
    }
  }
};
obj.method();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);