assert.throws(ReferenceError, function() {
  var af = _ => {
    foo = 1;
  };
  af();
});
assert.sameValue(typeof foo, "undefined");