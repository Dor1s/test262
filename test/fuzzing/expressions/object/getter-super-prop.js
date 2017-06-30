var proto = {
  _x: 42,
  get x() {
    return 'proto' + this._x;
  }
};
var object = {
  get x() {
    return super.x;
  }
};
Object.setPrototypeOf(object, proto);
assert.sameValue(object.x, 'proto42', "The value of `object.x` is `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(object._x, 42, "The value of `object._x` is `42`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(
  Object.getPrototypeOf(object)._x,
  42,
  "The value of `Object.getPrototypeOf(object)._x` is `42`"
);