assert.throws(SyntaxError, function() {
  eval('var static;');
});
assert.throws(SyntaxError, function() {
  eval('with ({}) {}');
});
assert.throws(ReferenceError, function() {
  eval('unresolvable = null;');
});