import * as ns from './get-own-property-sym.js';
var notFound = Symbol('test262');
var desc;
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, Symbol.toStringTag), true
);
desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
assert.sameValue(desc.value, ns[Symbol.toStringTag]);
assert.sameValue(desc.enumerable, false, 'Symbol.toStringTag enumerable');
assert.sameValue(desc.writable, false, 'Symbol.toStringTag writable');
assert.sameValue(desc.configurable, false, 'Symbol.toStringTag configurable');
assert.sameValue(Object.prototype.hasOwnProperty.call(ns, notFound), false);
desc = Object.getOwnPropertyDescriptor(ns, notFound);
assert.sameValue(desc, undefined);