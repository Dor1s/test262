  var o = {foo: 42};
  try {
    throw o;
  }
  catch (e) {
    var foo = 1;
  }
assert.sameValue(o.foo, 42);