var initCount = 0;
var iterCount = 0;
var iter = function*() { iterCount += 1; }();
const [[] = function() { initCount += 1; return iter; }()] = [];
assert.sameValue(initCount, 1);
assert.sameValue(iterCount, 0);