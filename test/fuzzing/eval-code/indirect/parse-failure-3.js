assert.throws(SyntaxError, function() {
  (0,eval)("continue;");
});
assert.throws(SyntaxError, function() {
  for (var i = 0; i <= 1; i++) {
    (0,eval)("continue;");
    $ERROR("First iteration should not complete");
  }
  $ERROR("Iteration should not complete");
});