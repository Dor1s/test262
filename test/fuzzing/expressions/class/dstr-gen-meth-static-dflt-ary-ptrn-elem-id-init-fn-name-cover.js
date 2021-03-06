var callCount = 0;
var C = class {
  static *method([cover = (function () {}), xCover = (0, function() {})] = []) {
    assert.sameValue(cover.name, 'cover');
    assert.notSameValue(xCover.name, 'xCover');
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');