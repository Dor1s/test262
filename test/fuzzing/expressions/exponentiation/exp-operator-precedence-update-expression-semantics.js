var base = 4;
assert.sameValue(--base ** 2, 9, "(--base ** 2) === 9");
assert.sameValue(++base ** 2, 16, "(++base ** 2) === 16");
assert.sameValue(base++ ** 2, 16, "(base++ ** 2) === 16");
assert.sameValue(base-- ** 2, 25, "(base-- ** 2) === 25");
base = 4;
assert.sameValue(
  --base ** --base ** 2,
  Math.pow(3, Math.pow(2, 2)),
  "(--base ** --base ** 2) === Math.pow(3, Math.pow(2, 2))"
);
assert.sameValue(
  ++base ** ++base ** 2,
  Math.pow(3, Math.pow(4, 2)),
  "(++base ** ++base ** 2) === Math.pow(3, Math.pow(4, 2))"
);
base = 4;
assert.sameValue(
  base-- ** base-- ** 2,
  Math.pow(4, Math.pow(3, 2)),
  "(base-- ** base-- ** 2) === Math.pow(4, Math.pow(3, 2))"
);
assert.sameValue(
  base++ ** base++ ** 2,
  Math.pow(2, Math.pow(3, 2)),
  "(base++ ** base++ ** 2) === Math.pow(2, Math.pow(3, 2))"
);