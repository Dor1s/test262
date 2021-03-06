assert(/\u{0}/u.test('\u0000'), 'Minimum value (U+0000)');
assert(/\u{1}/u.test('\u0001'), 'U+0001');
assert.sameValue(/\u{1}/u.test('u'), false);
assert(/\u{3f}/u.test('?'));
assert(/\u{000000003f}/u.test('?'), 'Leading zeros');
assert(/\u{3F}/u.test('?'), 'Case insensitivity');
assert(/\u{10ffff}/u.test('\udbff\udfff'), 'Maxiumum value (U+10ffff)');