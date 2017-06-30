var stringSet;
var obj = {
  get ['hex\x45scape']() { return 'get string'; },
  set ['hex\x45scape'](param) { stringSet = param; }
};
assert.sameValue(obj['hexEscape'], 'get string');
obj['hexEscape'] = 'set string';
assert.sameValue(stringSet, 'set string');