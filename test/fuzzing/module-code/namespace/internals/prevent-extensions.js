import * as ns from './prevent-extensions.js';
Object.preventExtensions(ns);
assert.sameValue(Reflect.preventExtensions(ns), true);