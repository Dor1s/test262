var stringSet;
class C {
  static get 0b10() { return 'get string'; }
  static set 0b10(param) { stringSet = param; }
}
assert.sameValue(C['2'], 'get string');
C['2'] = 'set string';
assert.sameValue(stringSet, 'set string');