var callCount = 0;
var f;
f = async function* h({a, b, ...rest}) {
  assert.sameValue(rest.x, 1);
  assert.sameValue(rest.y, 2);
  assert.sameValue(rest.a, undefined);
  assert.sameValue(rest.b, undefined);
  verifyEnumerable(rest, "x");
  verifyWritable(rest, "x");
  verifyConfigurable(rest, "x");
  verifyEnumerable(rest, "y");
  verifyWritable(rest, "y");
  verifyConfigurable(rest, "y");
  callCount = callCount + 1;
};
f({x: 1, y: 2, a: 5, b: 3}).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);