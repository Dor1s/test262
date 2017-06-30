var nonExtensible;
try {
  Object.preventExtensions(this);
  nonExtensible = !Object.isExtensible(this);
} catch (e) {
  nonExtensible = false;
}
if (nonExtensible) {
  var error;
  try {
    eval("var unlikelyVariableName");
  } catch (e) {
    error = e;
  }
  assert(error instanceof TypeError);
}