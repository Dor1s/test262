var callCount = 0;
class C {
  async *method({ cover = (function () {}), xCover = (0, function() {})  }) {
    assert.sameValue(cover.name, 'cover');
    assert.notSameValue(xCover.name, 'xCover');
    callCount = callCount + 1;
  }
};
new C().method({}).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);