var obj = {
  method(x = super.toString) {
    return x;
  }
};
obj.toString = null;
assert.sameValue(obj.method(), Object.prototype.toString);