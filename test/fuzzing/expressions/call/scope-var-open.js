var n = 'outside';
var probeBefore = function() { return n; };
var probeBody;
var func = function n() {
  // The initializer is intentionally omitted from the following
  // VariableStatement in order to demonstrate that a new binding is created
  // (and not simply re-used from the FunctionExpression's BindingIdentifier).
  var n;
  probeBody = function() { return n; };
};
func();
assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeBody(), undefined);