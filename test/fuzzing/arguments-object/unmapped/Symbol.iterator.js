(function() {
  'use strict';
  var descriptor = Object.getOwnPropertyDescriptor(arguments, Symbol.iterator);
  assert.sameValue(arguments[Symbol.iterator], [][Symbol.iterator]);
  verifyNotEnumerable(Array.prototype, Symbol.iterator);
  verifyWritable(Array.prototype, Symbol.iterator);
  verifyConfigurable(Array.prototype, Symbol.iterator);
}());