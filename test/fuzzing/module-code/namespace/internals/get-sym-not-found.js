import * as ns from './get-sym-not-found.js';
assert.sameValue(ns[Symbol('test262')], undefined, 'Symbol: test262');