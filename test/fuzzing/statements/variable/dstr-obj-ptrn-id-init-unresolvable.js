assert.throws(ReferenceError, function() {
  var { x = unresolvableReference } = {};
});