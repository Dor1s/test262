function af(...a) {}
function bf(a, ...b) {}
assert.sameValue(af.length, 0, "The value of `af.length` is `0`");
assert.sameValue(bf.length, 1, "The value of `bf.length` is `1`");