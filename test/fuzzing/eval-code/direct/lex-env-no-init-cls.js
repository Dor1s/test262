assert.throws(ReferenceError, function() {
  eval('typeof C; class C {}');
});