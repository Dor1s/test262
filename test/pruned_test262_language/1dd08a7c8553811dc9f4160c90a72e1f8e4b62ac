var caught = false;
try {
  {
    let xx = 18;
    throw 25;
  }
} catch (e) {
  caught = true;
  assert.sameValue(e, 25);
  (function () {
    try {
      // NOTE: This checks that the block scope containing xx has been
      // removed from the context chain.
      assert.sameValue(xx, undefined);
      eval('xx');
      assert(false);  // should not reach here
    } catch (e2) {
      assert(e2 instanceof ReferenceError);
    }
  })();
}
assert(caught);