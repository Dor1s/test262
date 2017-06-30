  var o = {};
  // define an accessor
  // dummy getter
  var getter = function () { return 1; }
  var desc = { get: getter, configurable: true };
  Object.defineProperty(o, "foo", desc);
    
  var d = delete o.foo;
assert.sameValue(d, true, 'd');
assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');