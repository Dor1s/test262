var yield = 'default';
var obj = {
  method(x = yield) {
    return x;
  }
};
assert.sameValue(obj.method(), 'default');