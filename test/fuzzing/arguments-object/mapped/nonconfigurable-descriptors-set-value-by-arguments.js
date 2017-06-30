function argumentsAndSetByIndex(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  arguments[0] = 2;
  let propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 2);
  assert.sameValue(a, 2);
  verifyEnumerable(arguments, "0");
  verifyWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
}
argumentsAndSetByIndex(1);