var calls;
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'a', '`a` character TV');
  assert.sameValue(s.raw[0], 'a', '`a` character TRV');
})`a`;
assert.sameValue(calls, 1);
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], '$', '`$` character TV');
  assert.sameValue(s.raw[0], '$', '`$` character TRV');
})`$`;
assert.sameValue(calls, 1);