var calls = 0;
var A = {
  set ['a'](_) {
    calls++;
  }
};
A.a = 'A';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `A.a = 'A';`");