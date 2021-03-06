var calls;
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], '', 'Template value (empty)');
  assert.sameValue(s.raw[0], '', 'Template raw value (empty)');
})`${1}`;
assert.sameValue(calls, 1);
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'foo', 'Template value (with content)');
  assert.sameValue(s.raw[0], 'foo', 'Template raw value (with content)');
})`foo${1}`;
assert.sameValue(calls, 1);