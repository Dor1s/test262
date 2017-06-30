var stringSet;
var C = class {
  static get .1() { return 'get string'; }
  static set .1(param) { stringSet = param; }
};
assert.sameValue(C['0.1'], 'get string');
C['0.1'] = 'set string';
assert.sameValue(stringSet, 'set string');