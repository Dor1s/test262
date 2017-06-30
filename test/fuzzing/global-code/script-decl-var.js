$262.evalScript('var brandNew;');
assert.sameValue(
  this.brandNew, undefined, 'new binding on an extensible global object'
);
verifyEnumerable(this, 'brandNew');
verifyWritable(this, 'brandNew');
verifyNotConfigurable(this, 'brandNew');
Object.defineProperty(
  this,
  'configurable',
  { configurable: true, writable: false, enumerable: false, value: 0 }
);
Object.defineProperty(
  this,
  'nonConfigurable',
  { configurable: false, writable: false, enumerable: false, value: 0 }
);
Object.preventExtensions(this);
$262.evalScript('var configurable;');
assert.sameValue(configurable, 0, 'like-named configurable property');
verifyNotEnumerable(this, 'configurable');
verifyNotWritable(this, 'configurable');
verifyConfigurable(this, 'configurable');
$262.evalScript('var nonConfigurable;');
assert.sameValue(nonConfigurable, 0, 'like-named non-configurable property');
verifyNotEnumerable(this, 'nonConfigurable');
verifyNotWritable(this, 'nonConfigurable');
verifyNotConfigurable(this, 'nonConfigurable');