var stringSet;
class C {
  static get 'unicod\u{000065}Escape'() { return 'get string'; }
  static set 'unicod\u{000065}Escape'(param) { stringSet = param; }
}
assert.sameValue(C['unicodeEscape'], 'get string');
C['unicodeEscape'] = 'set string';
assert.sameValue(stringSet, 'set string');