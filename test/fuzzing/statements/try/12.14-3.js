  try {
    throw new Error();
  }
  catch (e) {
    var foo = "declaration in catch";
  }
assert.sameValue(foo, "declaration in catch");