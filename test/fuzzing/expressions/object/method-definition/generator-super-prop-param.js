var obj = {
  *foo(a = super.toString) {
    return a;
  }
};
obj.toString = null;
assert.sameValue(obj.foo().next().value, Object.prototype.toString);