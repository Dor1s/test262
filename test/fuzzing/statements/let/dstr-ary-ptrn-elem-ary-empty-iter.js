var initCount = 0;
let [[] = function() { initCount += 1; }()] = [[23]];
assert.sameValue(initCount, 0);