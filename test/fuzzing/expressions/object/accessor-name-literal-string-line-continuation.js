var stringSet;
var obj = {
  get ['line\
Continuation']() { return 'get string'; },
  set ['line\
Continuation'](param) { stringSet = param; }
};
assert.sameValue(obj['lineContinuation'], 'get string');
obj['lineContinuation'] = 'set string';
assert.sameValue(stringSet, 'set string');