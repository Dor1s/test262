function argumentsAndDelete(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  assert.sameValue(delete arguments[0], false);
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsAndDelete(1);