function argumentsAndStrictDelete(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  var args = arguments;
  assert.throws(TypeError, function() { "use strict"; delete args[0]; });
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsAndStrictDelete(1);