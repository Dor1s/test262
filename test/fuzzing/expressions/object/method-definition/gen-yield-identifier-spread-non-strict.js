var s = Symbol('s');
var callCount = 0;
var gen = {
  *method() {
    callCount += 1;
    yield {
         ...yield yield,
         ...(function(arg) {
            var yield = arg;
            return {...yield};
         }(yield)),
         ...yield,
      }
  }
}.method;
var iter = gen();
var iter = gen();
iter.next();
iter.next();
iter.next({ x: 10, a: 0, b: 0, [s]: 1 });
iter.next({ y: 20, a: 1, b: 1, [s]: 42 });
var item = iter.next({ z: 30, b: 2 });
var value = item.value;
assert.sameValue(item.done, false);
assert.sameValue(value.x, 10);
assert.sameValue(value.y, 20);
assert.sameValue(value.z, 30);
assert.sameValue(value.a, 1);
assert.sameValue(value.b, 2);
assert.sameValue(value[s], 42);
assert(Object.hasOwnProperty.call(value, s));
assert.sameValue(Object.keys(value).length, 5);
assert.sameValue(callCount, 1);