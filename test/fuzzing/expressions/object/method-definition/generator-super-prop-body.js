var obj;
var obj = {
  *foo() {
    return super.toString;
  }
};
obj.toString = null;
assert.sameValue(obj.foo().next().value, Object.prototype.toString);