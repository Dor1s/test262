Object.defineProperty(this, 'test262Configurable', { configurable: true });
Object.defineProperty(this, 'test262NonConfigurable', { configurable: false });
$262.evalScript('let test262Configurable;');
assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262NonConfigurable;');
});
assert.throws(ReferenceError, function() {
  x;
});