var executed = false;
Object.preventExtensions(this);
assert.throws(TypeError, function() {
  $262.evalScript('executed = true; function test262() {}');
});
assert.sameValue(executed, false);