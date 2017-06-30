var stringSet;
var obj = {
  get ['singleQuote']() { return 'get string'; },
  set ['singleQuote'](param) { stringSet = param; }
};
assert.sameValue(obj['singleQuote'], 'get string');
obj['singleQuote'] = 'set string';
assert.sameValue(stringSet, 'set string');