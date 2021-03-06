var getterCalled = false;
Object.defineProperty(Function.prototype, "prototype", {
  get: function() {
    assert.sameValue(getterCalled, false, "'prototype' getter called once");
    getterCalled = true;
    return Array.prototype;
  }
});
var result = [] instanceof Function.prototype;
assert(result, "[] should be instance of Function.prototype");
assert(getterCalled, "'prototype' getter called");