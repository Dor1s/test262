var x = 86;
this[Symbol.unscopables] = {
  x: true
};
assert.sameValue(x, 86);