var f = function([ x = unresolvableReference ]) {};
assert.throws(ReferenceError, function() {
  f([]);
});