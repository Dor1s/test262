assert.throws(SyntaxError, function() {
  try {
    throw null;
  } catch (err) {
    eval('for (var err of []) {}');
  }
});