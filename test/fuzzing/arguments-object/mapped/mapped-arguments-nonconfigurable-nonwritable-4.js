function argumentsNonConfigurableThenNonWritableWithInterveningSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  arguments[0] = 2;
  Object.defineProperty(arguments, "0", {writable: false});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
  // Postcondition: Arguments mapping is removed.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 2);
}
argumentsNonConfigurableThenNonWritableWithInterveningSet(1);