var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
for (var { s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter() } = { s: null, u: 0, w: false, y: '' }; iterCount < 1; ) {
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
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');