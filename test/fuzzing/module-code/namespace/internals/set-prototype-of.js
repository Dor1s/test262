import * as ns from './set-prototype-of.js';
var newProto = {};
assert.sameValue(typeof Object.setPrototypeOf, 'function');
assert.throws(TypeError, function() {
  Object.setPrototypeOf(ns, newProto);
});