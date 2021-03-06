var callCount;
callCount = 0;
(function(s) {
  callCount++;
  assert.sameValue(
    s[0], '﻿test', 'TV (specified via unicode escape sequence)'
  );
  assert.sameValue(
    s.raw[0], '\\uFEFFtest', 'TV (specified via unicode escape sequence)'
  );
})`\uFEFFtest`;
assert.sameValue(callCount, 1);
callCount = 0;
(function(s) {
  callCount++;
  assert.sameValue(s[0], '﻿test', 'TV (specified via literal character)');
  assert.sameValue(
    s.raw[0], '﻿test', 'TV (specified via literal character)'
  );
})`﻿test`;
assert.sameValue(callCount, 1);