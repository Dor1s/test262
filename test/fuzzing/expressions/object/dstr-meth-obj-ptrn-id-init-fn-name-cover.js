var callCount = 0;
var obj = {
  method({ cover = (function () {}), xCover = (0, function() {})  }) {
    assert.sameValue(cover.name, 'cover');
    assert.notSameValue(xCover.name, 'xCover');
    callCount = callCount + 1;
  }
};
obj.method({});
assert.sameValue(callCount, 1, 'method invoked exactly once');