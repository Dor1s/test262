let a = [];
for (let i = 0; i < 5; a.push(function () { return i; }), ++i) { }
for (let k = 0; k < 5; ++k) {
  assert.sameValue(k + 1, a[k]());
}