assert.throws(ReferenceError, function() {
  try {
    throw {};
  } catch ({ x: y = unresolvableReference }) {}
});