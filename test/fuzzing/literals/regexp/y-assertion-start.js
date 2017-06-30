var re;
re = /^a/y;
re.lastIndex = 0;
assert.sameValue(
  re.test('a'), true, 'positive: beginning of input (without `m`)'
);
re.lastIndex = 1;
assert.sameValue(
  re.test(' a'), false, 'negative: within a line (without `m`)'
);
re.lastIndex = 1;
assert.sameValue(
  re.test('\na'), false, 'negative: beginning of line (without `m`)'
);
re = /^a/my;
re.lastIndex = 0;
assert.sameValue(
  re.test('a'), true, 'positive: beginning of input (with `m`)'
);
re.lastIndex = 1;
assert.sameValue(
  re.test(' a'), false, 'negative: within a line (with `m`)'
);
re.lastIndex = 1;
assert.sameValue(
  re.test('\na'), true, 'positive: beginning of line (with `m`)'
);