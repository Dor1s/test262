import * as ns from './has-property-sym-not-found.js';
var sym = Symbol('test262');
assert.sameValue(sym in ns, false, 'in');
assert.sameValue(Reflect.has(ns, sym), false, 'Reflect.has');