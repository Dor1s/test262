var initCount = 0;
const [[] = function() { initCount += 1; }()] = [[23]];
assert.sameValue(initCount, 0);