  var o = {};
  var desc = { value : 1, configurable: false }; // all other attributes default to false
  Object.defineProperty(o, "foo", desc);
  
  // Now, deleting o.foo should fail because [[Configurable]] on foo is false.
  var d = delete o.foo;
assert.sameValue(d, false, 'd');
assert.sameValue(o.hasOwnProperty("foo"), true, 'o.hasOwnProperty("foo")');