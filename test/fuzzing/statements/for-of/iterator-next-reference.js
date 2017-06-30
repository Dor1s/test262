var iterable = {};
var iterator = {};
var firstIterResult = { done: false };
var iterationCount, invocationCount;
iterable[Symbol.iterator] = function() {
  return iterator;
};
iterator.next = function() { return { value: 45, done: false }; };
iterationCount = 0;
invocationCount = 0;
for (var x of iterable) {
  assert.sameValue(x, 45);
  iterator.next = function() {
    invocationCount++;
    Object.defineProperty(iterator, 'next', {
      get: function() {
        $ERROR('Should not access the `next` method after iteration ' +
          'is complete.');
      }
    });
    return { value: null, done: true };
  };
  iterationCount++;
}
assert.sameValue(iterationCount, 1);
assert.sameValue(invocationCount, 1);