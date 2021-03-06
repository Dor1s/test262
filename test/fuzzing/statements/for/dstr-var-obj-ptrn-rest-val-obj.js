var iterCount = 0;
for (var {a, b, ...rest} = {x: 1, y: 2, a: 5, b: 3}; iterCount < 1; ) {
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
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');