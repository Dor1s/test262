var calls;
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'b', 'u Hex4Digits template value');
  assert.sameValue(s.raw[0], '\\u0062', 'u Hex4Digits template raw value');
})`\u0062`;
assert.sameValue(calls, 1);
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'b', 'u{ HexDigits } template value');
  assert.sameValue(
    s.raw[0], '\\u{62}', 'u{ Hex4Digits } template raw value'
  );
})`\u{62}`;
assert.sameValue(calls, 1);
calls = 0;
(function(s) {
  calls++;
  assert.sameValue(
    s[0], 'b', 'u{ HexDigits } template value (with leading zeros)'
  );
  assert.sameValue(
    s.raw[0],
    '\\u{000062}',
    'u{ HexDigits } template raw value (with leading zeros)'
  );
})`\u{000062}`;
assert.sameValue(calls, 1);