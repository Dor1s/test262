  var o = { foo : 42};
  try {
    throw o;
  }
  catch (e) {
    var foo;
  }
assert.sameValue(foo, undefined);