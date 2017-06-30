var initial = null;
Object.defineProperty(this, 'f', {
  enumerable: false,
  writable: false,
  configurable: true
});
eval('initial = f; function f() { return 345; }');
verifyEnumerable(this, 'f');
verifyWritable(this, 'f');
verifyConfigurable(this, 'f');
assert.sameValue(typeof initial, 'function');
assert.sameValue(initial(), 345);