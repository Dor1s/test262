  var o = {foo: 42};
  with (o) {
    var foo = "set in with";
  }
assert.sameValue(o.foo, "set in with", 'o.foo');