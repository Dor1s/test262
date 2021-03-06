import * as ns from './delete-non-exported.js';
var sym = Symbol('test262');
assert(delete ns.undef, 'delete: undef');
assert(Reflect.deleteProperty(ns, 'undef'), 'Reflect.deleteProperty: undef');
assert(delete ns.default, 'delete: default');
assert(
  Reflect.deleteProperty(ns, 'default'), 'Reflect.deleteProperty: default'
);
assert.throws(TypeError, function() { delete ns[Symbol.toStringTag]; }, 'delete: Symbol.toStringTag');
assert.sameValue(
  Reflect.deleteProperty(ns, Symbol.toStringTag), false,
  'Reflect.deleteProperty: Symbol.toStringTag'
);
assert(delete ns[sym], 'delete: symbol');
assert(Reflect.deleteProperty(ns, sym), 'Reflect.deleteProperty: symbol');