var af = BindingIdentifier => {
  return BindingIdentifier;
};
assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);