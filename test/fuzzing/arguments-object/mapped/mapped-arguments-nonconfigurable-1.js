function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurable(1);