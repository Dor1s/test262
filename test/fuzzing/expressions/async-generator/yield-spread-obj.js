var callCount = 0;
var gen = async function *() {
  callCount += 1;
  yield {
      ...yield,
      y: 1,
      ...yield yield,
    };
};
var iter = gen();
iter.next();
iter.next({ x: 42 });
iter.next({ x: 'lol' });
var item = iter.next({ y: 39 });
item.then(({ done, value }) => {
  assert.sameValue(value.x, 42);
  assert.sameValue(value.y, 39);
  assert.sameValue(Object.keys(value).length, 2);
  assert.sameValue(done, false);
}).then($DONE, $DONE);
assert.sameValue(callCount, 1);