  var o = "str";
  var foo = 1;
    with (o) {
      foo = 42;
    }
assert.sameValue(foo, 42);