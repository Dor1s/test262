var callCount = 0;
class C { *gen() {
    callCount += 1;
    yield {
        ...yield,
        y: 1,
        ...yield yield,
      };
}}
var gen = C.prototype.gen;
var iter = gen();
iter.next();
iter.next({ x: 42 });
iter.next({ x: 'lol' });
var item = iter.next({ y: 39 });
assert.sameValue(item.value.x, 42);
assert.sameValue(item.value.y, 39);
assert.sameValue(Object.keys(item.value).length, 2);
assert.sameValue(item.done, false);
assert.sameValue(callCount, 1);