import * as ns from './has-property-str-not-found.js';
var test262;
export { test262 as anotherName };
assert.sameValue('test262' in ns, false, 'in: test262');
assert.sameValue(Reflect.has(ns, 'test262'), false, 'Reflect.has: test262');
assert.sameValue('toStringTag' in ns, false, 'in: toStringTag');
assert.sameValue(
  Reflect.has(ns, 'toStringTag'), false, 'Reflect.has: toStringTag'
);
assert.sameValue('iterator' in ns, false, 'in: iterator');
assert.sameValue(Reflect.has(ns, 'iterator'), false, 'Reflect.has: iterator');
assert.sameValue('__proto__' in ns, false, 'in: __proto__');
assert.sameValue(
  Reflect.has(ns, '__proto__'), false, 'Reflect.has: __proto__'
);
assert.sameValue('default' in ns, false, 'in: default');
assert.sameValue(Reflect.has(ns, 'default'), false, 'Reflect.has: default');