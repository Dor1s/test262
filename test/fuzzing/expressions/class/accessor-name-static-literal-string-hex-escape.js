var stringSet;
var C = class {
  static get 'hex\x45scape'() { return 'get string'; }
  static set 'hex\x45scape'(param) { stringSet = param; }
};
assert.sameValue(C['hexEscape'], 'get string');
C['hexEscape'] = 'set string';
assert.sameValue(stringSet, 'set string');