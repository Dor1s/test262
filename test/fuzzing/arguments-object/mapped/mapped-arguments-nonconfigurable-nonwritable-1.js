function argumentsNonConfigurableAndNonWritable(a) {
  Object.defineProperty(arguments, "0", {configurable: false, writable: false});
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
  // Postcondition: Arguments mapping is removed.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableAndNonWritable(1);