  var o = {foo: 1};
  with (o) {
    foo = 42;
  }
  try {
    foo;
    throw new Error();
  }
  catch (e) {
    assert(e instanceof ReferenceError);
  }