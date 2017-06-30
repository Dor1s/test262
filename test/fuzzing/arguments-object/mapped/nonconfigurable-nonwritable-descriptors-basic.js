function fn(a) {
  Object.defineProperty(arguments, "0", {configurable: false, writable: false});
  // Postcondition: Arguments mapping is removed.
  a = 2;
  let propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 1);
  verifyEnumerable(arguments, "0");
  verifyNotWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
}
fn(1);