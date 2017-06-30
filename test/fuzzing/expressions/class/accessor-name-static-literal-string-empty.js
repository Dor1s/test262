var stringSet;
var C = class {
  static get ''() { return 'get string'; }
  static set ''(param) { stringSet = param; }
};
assert.sameValue(C[''], 'get string');
C[''] = 'set string';
assert.sameValue(stringSet, 'set string');