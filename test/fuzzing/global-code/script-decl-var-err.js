var executed = false;
Object.preventExtensions(this);
assert.throws(TypeError, function() {
  $262.evalScript('executed = true; var test262;');
});
assert.sameValue(executed, false);