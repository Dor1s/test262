function getArguments() {
  return arguments;
}
assert.sameValue(Object.getOwnPropertyDescriptor(getArguments(), 'caller'), undefined, 'arguments.caller does not exist');