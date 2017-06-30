function* g() {}
verifyNotEnumerable(g, 'prototype');
verifyWritable(g, 'prototype');
verifyNotConfigurable(g, 'prototype');