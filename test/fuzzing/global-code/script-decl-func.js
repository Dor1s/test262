$262.evalScript('function brandNew() {}');
assert.sameValue(
  typeof brandNew, 'function', 'new binding on an extensible global object'
);
verifyEnumerable(this, 'brandNew');
verifyWritable(this, 'brandNew');
verifyNotConfigurable(this, 'brandNew');
Object.defineProperty(this, 'configurable', { configurable: true, value: 0 });
Object.defineProperty(
  this,
  'nonConfigurable',
  { configurable: false, writable: true, enumerable: true, value: 0 }
);
Object.preventExtensions(this);
$262.evalScript('function configurable() {}');
assert.sameValue(
  typeof configurable, 'function', 'like-named configurable property'
);
verifyEnumerable(this, 'configurable')
verifyWritable(this, 'configurable');
verifyNotConfigurable(this, 'configurable');
$262.evalScript('function nonConfigurable() {}');
assert.sameValue(
  typeof nonConfigurable,
  'function',
  'like-named non-configurable data property that is writable and enumerable'
);
verifyEnumerable(this, 'nonConfigurable');
verifyWritable(this, 'nonConfigurable');
verifyNotConfigurable(this, 'nonConfigurable');