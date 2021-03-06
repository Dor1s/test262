var getterCalled = false;
function DummyError() { }
Object.defineProperty(Function.prototype, "prototype", {
  get: function() {
    assert.sameValue(getterCalled, false, "'prototype' getter called once");
    getterCalled = true;
    throw new DummyError();
  }
});
assert.throws(DummyError, function() {
  [] instanceof Function.prototype;
});