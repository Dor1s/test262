var calls;
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], '\n\n\n', 'Line Feed and Carriage Return');
  assert.sameValue(s.raw[0], '\n\n\n', 'Line Feed and Carriage Return');
})`
`;
assert.sameValue(calls, 1);
calls = 0;
(function(cs) {
  calls++;
  assert.sameValue(cs[0], '\u2028', 'Line Separator');
  assert.sameValue(cs.raw[0], '\u2028', 'Line Separator');
})` `
assert.sameValue(calls, 1);
calls = 0;
(function(cs) {
  calls++;
  assert.sameValue(cs[0], '\u2029', 'Paragraph Separator');
  assert.sameValue(cs.raw[0], '\u2029', 'Paragraph Separator');
})` `
assert.sameValue(calls, 1);