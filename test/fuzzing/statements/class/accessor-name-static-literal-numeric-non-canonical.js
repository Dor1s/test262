var stringSet;
class C {
  static get 0.0000001() { return 'get string'; }
  static set 0.0000001(param) { stringSet = param; }
}
assert.sameValue(C['1e-7'], 'get string');
C['1e-7'] = 'set string';
assert.sameValue(stringSet, 'set string');