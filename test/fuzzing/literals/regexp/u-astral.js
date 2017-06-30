assert(/𝌆{2}/u.test('𝌆𝌆'), 'quantifier application');
assert(/^[𝌆]$/u.test('𝌆'), 'as a ClassAtom');
var rangeRe = /[💩-💫]/u;
assert.sameValue(
  rangeRe.test('\ud83d\udca8'),
  false,
  'ClassAtom as lower range boundary, input below (U+1F4A8)'
);
assert.sameValue(
  rangeRe.test('\ud83d\udca9'),
  true,
  'ClassAtom as lower range boundary, input match (U+1F4A9)'
);
assert.sameValue(
  rangeRe.test('\ud83d\udcaa'),
  true,
  'ClassAtom as upper- and lower-range boundary, input within (U+1F4AA)'
);
assert.sameValue(
  rangeRe.test('\ud83d\udcab'),
  true,
  'ClassAtom as upper range boundary, input match (U+1F4AB)'
);
assert.sameValue(
  rangeRe.test('\ud83d\udcac'),
  false,
  'ClassAtom as upper range boundary, input above (U+1F4AC)'
);
assert(/[^𝌆]/u.test('\ud834'), 'Negated character classes (LeadSurrogate)');
assert(/[^𝌆]/u.test('\udf06'), 'Negated character classes (TrailSurrogate)');