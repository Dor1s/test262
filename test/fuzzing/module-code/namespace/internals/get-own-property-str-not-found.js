import * as ns from './get-own-property-str-not-found.js';
var test262;
export { test262 as anotherName };
var desc;
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, 'test262'),
  false,
  'hasOwnProperty: test262'
);
desc = Object.getOwnPropertyDescriptor(ns, 'test262');
assert.sameValue(desc, undefined, 'property descriptor for "test262"');
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, 'desc'),
  false,
  'hasOwnProperty: desc'
);
desc = Object.getOwnPropertyDescriptor(ns, 'desc');
assert.sameValue(desc, undefined, 'property descriptor for "desc"');
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, 'toStringTag'),
  false,
  'hasOwnProperty: toStringTag'
);
desc = Object.getOwnPropertyDescriptor(ns, 'toStringTag');
assert.sameValue(desc, undefined, 'property descriptor for "toStringTag"');
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, 'iterator'),
  false,
  'hasOwnProperty: iterator'
);
desc = Object.getOwnPropertyDescriptor(ns, 'iterator');
assert.sameValue(desc, undefined, 'property descriptor for "iterator"');
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, '__proto__'),
  false,
  'hasOwnProperty: __proto__'
);
desc = Object.getOwnPropertyDescriptor(ns, '__proto__');
assert.sameValue(desc, undefined, 'property descriptor for "__proto__"');
assert.sameValue(
  Object.prototype.hasOwnProperty.call(ns, 'default'),
  false,
  'hasOwnProperty: default'
);
desc = Object.getOwnPropertyDescriptor(ns, 'default');
assert.sameValue(desc, undefined, 'property descriptor for "default"');