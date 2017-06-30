var nonExtensible;
try {
  Object.preventExtensions(this);
  nonExtensible = !Object.isExtensible(this);
} catch (e) {
  nonExtensible = false;
}
if (nonExtensible) {
  assert.throws(TypeError, function() {
    (0,eval)("var unlikelyVariableName;");
  });
}