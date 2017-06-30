var stringSet;
class C {
  get 'line\
Continuation'() { return 'get string'; }
  set 'line\
Continuation'(param) { stringSet = param; }
}
assert.sameValue(C.prototype['lineContinuation'], 'get string');
C.prototype['lineContinuation'] = 'set string';
assert.sameValue(stringSet, 'set string');