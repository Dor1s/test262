var stringSet;
var obj = {
  get ['character\tescape']() { return 'get string'; },
  set ['character\tescape'](param) { stringSet = param; }
};
assert.sameValue(obj['character	escape'], 'get string');
obj['character	escape'] = 'set string';
assert.sameValue(stringSet, 'set string');