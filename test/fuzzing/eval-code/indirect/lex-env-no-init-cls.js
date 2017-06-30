assert.throws(ReferenceError, function() {
  (0,eval)('typeof C; class C {}');
});