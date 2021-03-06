var proto = {
  method(x) {
    return 'proto' + x;
  }
};
var object = {
  method(x) {
    return super.method(x);
  }
};
Object.setPrototypeOf(object, proto);
assert.sameValue(object.method(42), 'proto42', "`object.method(42)` returns `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(proto.method(42), 'proto42', "`proto.method(42)` returns `'proto42'`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(
  Object.getPrototypeOf(object).method(42),
  'proto42',
  "`Object.getPrototypeOf(object).method(42)` returns `'proto42'`"
);