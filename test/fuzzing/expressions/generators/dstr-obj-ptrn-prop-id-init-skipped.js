var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var f;
f = function*({ s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter() }) {
  assert.sameValue(t, null);
  assert.sameValue(v, 0);
  assert.sameValue(x, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  assert.throws(ReferenceError, function() {
    s;
  });
  assert.throws(ReferenceError, function() {
    u;
  });
  assert.throws(ReferenceError, function() {
    w;
  });
  assert.throws(ReferenceError, function() {
    y;
  });
  callCount = callCount + 1;
};
f({ s: null, u: 0, w: false, y: '' }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');