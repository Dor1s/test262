function fn(a) {
  Object.defineProperty(arguments, "0", {writable: false, enumerable: false});
  arguments[0] = 2;
  Object.defineProperty(arguments, "0", {configurable: false});
  let propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 1);
  verifyNotEnumerable(arguments, "0");
  verifyNotWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
  // Postcondition: Arguments mapping is removed.
  a = 3;
  propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 1);
  verifyNotEnumerable(arguments, "0");
  verifyNotWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
}
fn(1);