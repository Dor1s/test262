  var o = {};
  var desc = { value : 1 }; // all other attributes default to false
  Object.defineProperty(o, "foo", desc);
  
  // Now, deleting o.foo should throw TypeError because [[Configurable]] on foo is false.
assert.throws(TypeError, function() {
    delete o.foo;
});