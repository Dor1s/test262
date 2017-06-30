var caught;
var obj = {
  method() {
    try {
      super[test262unresolvable];
    } catch (err) {
      caught = err;
    }
  }
};
obj.method();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, ReferenceError);