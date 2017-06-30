function fn(a) {
  Object.defineProperty(arguments, "0", {writable: false, enumerable: false, value: 2, configurable: false});
  let propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 2);
  assert.sameValue(arguments[0], 2);
  verifyNotEnumerable(arguments, "0");
  verifyNotWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
}
fn(1);