var stringSet;
class C {
  static get 0x10() { return 'get string'; }
  static set 0x10(param) { stringSet = param; }
}
assert.sameValue(C['16'], 'get string');
C['16'] = 'set string';
assert.sameValue(stringSet, 'set string');