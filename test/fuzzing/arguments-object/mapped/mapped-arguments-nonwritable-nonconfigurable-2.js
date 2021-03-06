function argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  a = 2;
  Object.defineProperty(arguments, "0", {configurable: false});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
  // Postcondition: Arguments mapping is removed.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 1);
}
argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(1);