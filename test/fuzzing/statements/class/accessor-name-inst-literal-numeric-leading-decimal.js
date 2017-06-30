var stringSet;
class C {
  get .1() { return 'get string'; }
  set .1(param) { stringSet = param; }
}
assert.sameValue(C.prototype['0.1'], 'get string');
C.prototype['0.1'] = 'set string';
assert.sameValue(stringSet, 'set string');