var iterCount = 0;
var first = true;
for (var x; first; first = false) {
  var x;
  iterCount += 1;
}
assert.sameValue(iterCount, 1);