var stringSet;
class C {
  get 'hex\x45scape'() { return 'get string'; }
  set 'hex\x45scape'(param) { stringSet = param; }
}
assert.sameValue(C.prototype['hexEscape'], 'get string');
C.prototype['hexEscape'] = 'set string';
assert.sameValue(stringSet, 'set string');