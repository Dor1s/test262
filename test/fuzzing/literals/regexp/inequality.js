function makeRegExp() {
  return /(?:)/;
}
assert.notSameValue(makeRegExp(), makeRegExp());
var values = [];
for (var i = 0; i < 2; ++i) {
  values[i] = /(?:)/;
}
assert.notSameValue(values[0], values[1]);