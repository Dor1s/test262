var g = function*() {};
verifyNotEnumerable(g, 'prototype');
verifyWritable(g, 'prototype');
verifyNotConfigurable(g, 'prototype');