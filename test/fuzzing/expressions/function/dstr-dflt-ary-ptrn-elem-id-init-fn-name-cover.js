var callCount = 0;
var f;
f = function([cover = (function () {}), xCover = (0, function() {})] = []) {
  assert.sameValue(cover.name, 'cover');
  assert.notSameValue(xCover.name, 'xCover');
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');