assert.sameValue(
  this.brandNew, undefined, 'new binding on an extensible global object'
);
verifyEnumerable(this, 'brandNew');
verifyWritable(this, 'brandNew');
verifyNotConfigurable(this, 'brandNew');
var brandNew;