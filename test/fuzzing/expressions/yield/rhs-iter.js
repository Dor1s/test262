var callCount = 0;
var iterSpy = Object.defineProperty({}, Symbol.iterator, {
  get: function() {
    callCount += 1;
  }
});
function* g() {
  yield iterSpy;
}
var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, iterSpy);
assert.sameValue(result.done, false);
assert.sameValue(callCount, 0);
result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(callCount, 0);