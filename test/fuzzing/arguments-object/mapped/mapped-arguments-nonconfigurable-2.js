function argumentsAndSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndSetMutableBinding(1);