import * as ns from './has-property-sym-found.js';
assert(Symbol.toStringTag in ns, 'in: Symbol.toStringTag');
assert(Reflect.has(ns, Symbol.toStringTag), 'Reflect.has: Symbol.toStringTag');