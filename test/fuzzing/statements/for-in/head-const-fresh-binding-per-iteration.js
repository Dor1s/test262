let s = '';
for (const x of [1, 2, 3]) {
  s += x;
}
assert.sameValue(s, '123', "The value of `s` is `'123'`");