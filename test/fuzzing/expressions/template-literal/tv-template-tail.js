var calls;
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[1], '', 'Template value (empty)');
  assert.sameValue(s.raw[1], '', 'Template raw value (empty)');
})`${1}`;
assert.sameValue(calls, 1);
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[1], 'foo', 'Template value (with content)');
  assert.sameValue(s.raw[1], 'foo', 'Template raw value (with content)');
})`${1}foo`;
assert.sameValue(calls, 1);