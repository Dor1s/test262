var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
class GFn extends GeneratorFunction {}
var gfn = new GFn(';');
assert.sameValue(
  Object.keys(gfn.prototype).length, 0,
  'prototype is a new ordinary object'
);
assert.sameValue(
  gfn.prototype.hasOwnProperty('constructor'), false,
  'prototype has no constructor reference'
);
verifyNotEnumerable(gfn, 'prototype');
verifyWritable(gfn, 'prototype');
verifyNotConfigurable(gfn, 'prototype');