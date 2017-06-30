function argumentsAndDeleteSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  // Precondition: Delete is unsuccessful and doesn't affect mapping.
  assert.sameValue(delete arguments[0], false);
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDeleteSetMutableBinding(1);