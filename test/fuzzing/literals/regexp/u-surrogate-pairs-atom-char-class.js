assert(/^[\ud800\udc00]$/u.test('\ud800\udc00'));
assert.sameValue(
  /[\ud800\udc00]/u.test('\ud800'),
  false,
  '\\ud800 does not qualify as a class member'
);
assert.sameValue(
  /[\ud800\udc00]/u.test('\udc00'),
  false,
  '\\udc00 does not qualify as a class member'
);