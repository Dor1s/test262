assert.sameValue(
  typeof brandNew, 'function', 'new binding on an extensible global object'
);
verifyEnumerable(this, 'brandNew');
verifyWritable(this, 'brandNew');
verifyNotConfigurable(this, 'brandNew');
function brandNew() {}