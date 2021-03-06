var obj = {
  method() {
    super['x'] = 8;
    Object.freeze(obj);
    super['y'] = 9;
  }
};
obj.method();
assert.sameValue(Object.hasOwnProperty.call(obj, 'x'), true);
assert.sameValue(Object.hasOwnProperty.call(obj, 'y'), false);