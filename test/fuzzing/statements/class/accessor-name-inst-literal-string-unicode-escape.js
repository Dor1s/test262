var stringSet;
class C {
  get 'unicod\u{000065}Escape'() { return 'get string'; }
  set 'unicod\u{000065}Escape'(param) { stringSet = param; }
}
assert.sameValue(C.prototype['unicodeEscape'], 'get string');
C.prototype['unicodeEscape'] = 'set string';
assert.sameValue(stringSet, 'set string');