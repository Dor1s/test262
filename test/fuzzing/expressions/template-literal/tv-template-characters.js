var calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], 'test');
})`test`;
assert.sameValue(calls, 1);
assert.sameValue(`test`, 'test');