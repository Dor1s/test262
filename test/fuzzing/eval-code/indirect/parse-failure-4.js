assert.throws(SyntaxError, function() {
  (0,eval)("break;");
});
assert.throws(SyntaxError, function() {
  for (var i = 0; i <= 1; i++) {
    (0,eval)("break;");
    $ERROR("First iteration should not complete");
  }
  $ERROR("Iteration should not complete");
});