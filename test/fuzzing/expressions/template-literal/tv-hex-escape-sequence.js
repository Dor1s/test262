var calls;
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'A', 'TV');
  assert.sameValue(s.raw[0], '\\x41', 'TRV');
})`\x41`;
assert.sameValue(calls, 1);