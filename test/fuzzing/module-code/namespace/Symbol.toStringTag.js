import * as ns from './Symbol.toStringTag.js';
assert.sameValue(ns[Symbol.toStringTag], 'Module');
var desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
assert.sameValue(desc.enumerable, false, 'reports as non-enumerable');
assert.sameValue(desc.writable, false, 'reports as non-writable');
assert.sameValue(desc.configurable, false, 'reports as non-configurable');