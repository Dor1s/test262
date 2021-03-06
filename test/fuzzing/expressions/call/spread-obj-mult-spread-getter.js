let getterCallCount = 0;
let o = {
    get a() {
        return ++getterCallCount;
    }
};
var callCount = 0;
(function(obj) {
  assert.sameValue(obj.a, 2);
  assert.sameValue(obj.c, 4);
  assert.sameValue(obj.d, 5);
  assert.sameValue(Object.keys(obj).length, 3);
  callCount += 1;
}({...o, c: 4, d: 5, a: 42, ...o}));
assert.sameValue(callCount, 1);