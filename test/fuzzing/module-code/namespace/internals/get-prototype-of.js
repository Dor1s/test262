import * as ns from './get-prototype-of.js';
assert.sameValue(ns instanceof Object, false);
assert.sameValue(Object.getPrototypeOf(ns), null);