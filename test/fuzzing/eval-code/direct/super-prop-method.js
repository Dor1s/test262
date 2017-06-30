var superProp = null;
var o = {
  test262: null,
  method() {
    superProp = eval('super.test262;');
  }
};
o.method();
assert.sameValue(superProp, undefined);
Object.setPrototypeOf(o, { test262: 262 });
o.method();
assert.sameValue(superProp, 262);