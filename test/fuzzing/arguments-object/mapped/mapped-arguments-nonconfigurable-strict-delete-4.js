function argumentsAndStrictDeleteSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  // Precondition: Delete is unsuccessful and doesn't affect mapping.
  var args = arguments;
  assert.throws(TypeError, function() { "use strict"; delete args[0]; });
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
  arguments[0] = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndStrictDeleteSet(1);