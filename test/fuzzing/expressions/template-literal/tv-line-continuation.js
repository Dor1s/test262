var calls;
calls = 0;
(function(cs) {
  calls++;
  assert.sameValue(cs[0], '', 'Line Feed and Carriage Return');
  assert.sameValue(
    cs.raw[0], '\u005C\n\u005C\n\u005C\n', 'Line Feed and Carriage Return'
  );
})`\
\
\
`
assert.sameValue(calls, 1);
calls = 0;
(function(cs) {
  calls++;
  assert.sameValue(cs[0], '', 'Line Separator');
  assert.sameValue(cs.raw[0], '\\\u2028', 'Line Separator');
})`\ `
assert.sameValue(calls, 1);
calls = 0;
(function(cs) {
  calls++;
  assert.sameValue(cs[0], '', 'Paragraph Separater');
  assert.sameValue(cs.raw[0], '\\\u2029', 'Paragraph Separator');
})`\ `
assert.sameValue(calls, 1);