assert.sameValue(Object.hasOwnProperty.call(function*() {}, 'name'), false);
assert.sameValue(function* func() {}.name, 'func');
verifyNotEnumerable(function* func() {}, 'name');
verifyNotWritable(function* func() {}, 'name');
verifyConfigurable(function* func() {}, 'name');