var stringSet;
var obj = {
  get ['unicod\u{000065}Escape']() { return 'get string'; },
  set ['unicod\u{000065}Escape'](param) { stringSet = param; }
};
assert.sameValue(obj['unicodeEscape'], 'get string');
obj['unicodeEscape'] = 'set string';
assert.sameValue(stringSet, 'set string');