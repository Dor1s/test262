let Array;
assert.sameValue(Array, undefined);
assert.sameValue(typeof this.Array, 'function');
verifyNotEnumerable(this, 'Array');
verifyWritable(this, 'Array');
verifyConfigurable(this, 'Array');