assert.throws(ReferenceError, function() {
  try {
    throw {};
  } catch ({ x = unresolvableReference }) {}
});