import * as ns from './Symbol.iterator.js';
assert.sameValue(Object.prototype.hasOwnProperty.call(ns, Symbol.iterator), false);