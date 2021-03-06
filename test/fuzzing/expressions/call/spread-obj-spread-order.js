var calls = [];
var o = { get z() { calls.push('z') }, get a() { calls.push('a') } };
Object.defineProperty(o, 1, { get: () => { calls.push(1) }, enumerable: true });
Object.defineProperty(o, Symbol('foo'), { get: () => { calls.push("Symbol(foo)") }, enumerable: true });
var callCount = 0;
(function(obj) {
  assert(compareArray(calls, [1, 'z', 'a', "Symbol(foo)"]));
  assert.sameValue(Object.keys(obj).length, 3);
  callCount += 1;
}({...o}));
assert.sameValue(callCount, 1);