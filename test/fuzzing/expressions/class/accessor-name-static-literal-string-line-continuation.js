var stringSet;
var C = class {
  static get 'line\
Continuation'() { return 'get string'; }
  static set 'line\
Continuation'(param) { stringSet = param; }
};
assert.sameValue(C['lineContinuation'], 'get string');
C['lineContinuation'] = 'set string';
assert.sameValue(stringSet, 'set string');