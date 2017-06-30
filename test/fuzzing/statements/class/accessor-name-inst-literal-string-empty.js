var stringSet;
class C {
  get ''() { return 'get string'; }
  set ''(param) { stringSet = param; }
}
assert.sameValue(C.prototype[''], 'get string');
C.prototype[''] = 'set string';
assert.sameValue(stringSet, 'set string');