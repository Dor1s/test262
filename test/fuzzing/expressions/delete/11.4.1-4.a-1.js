  var o = {};
  var desc = { value: 1, configurable: true };
  Object.defineProperty(o, "foo", desc);
  var d = delete o.foo;
assert.sameValue(d, true, 'd');
assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');