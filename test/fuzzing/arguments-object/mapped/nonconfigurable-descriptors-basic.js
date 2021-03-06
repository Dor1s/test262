function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  let propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 1);
  verifyEnumerable(arguments, "0");
  verifyWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
}
argumentsNonConfigurable(1);