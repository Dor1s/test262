import * as ns from './set-prototype-of-null.js';
assert.sameValue(typeof Object.setPrototypeOf, 'function');
assert.sameValue(ns, Object.setPrototypeOf(ns, null));