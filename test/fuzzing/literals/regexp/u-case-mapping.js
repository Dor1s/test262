assert.sameValue(
  /\u212a/i.test('k'),
  false,
  'Case mapping is not applied in the absence of the `u` flag'
);
assert.sameValue(
  /\u212a/i.test('K'),
  false,
  'Case mapping is not applied in the absence of the `u` flag'
);
assert.sameValue(
  /\u212a/u.test('k'),
  false,
  'Case mapping is not applied in the absence of the `i` flag'
);
assert.sameValue(
  /\u212a/u.test('K'),
  false,
  'Case mapping is not applied in the absence of the `i` flag'
);
assert(
  /\u212a/iu.test('k'),
  'Case mapping is applied in the presence of the `i` and `u` flags'
);
assert(
  /\u212a/iu.test('K'),
  'Case mapping is applied in the presence of the `i` and `u` flags'
);