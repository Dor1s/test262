var GeneratorPrototype = Object.getPrototypeOf(function* () {}).prototype;
var method = { *method() {} }.method;
verifyNotEnumerable(method, 'prototype');
verifyWritable(method, 'prototype');
verifyNotConfigurable(method, 'prototype');
assert.sameValue(
  Object.getPrototypeOf(method.prototype),
  GeneratorPrototype
);