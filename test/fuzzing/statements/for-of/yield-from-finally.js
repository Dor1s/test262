function* values() {
  yield 1;
  yield 1;
}
var dataIterator = values();
var controlIterator = (function*() {
  for (var x of dataIterator) {
    try {
    } finally {
      i++;
      yield;
      j++;
    }
    k++;
  }
  l++;
})();
var i = 0;
var j = 0;
var k = 0;
var l = 0;
controlIterator.next();
assert.sameValue(i, 1, 'First iteration: pre-yield');
assert.sameValue(j, 0, 'First iteration: post-yield');
assert.sameValue(k, 0, 'First iteration: post-try');
assert.sameValue(l, 0, 'First iteration: post-for-of');
controlIterator.next();
assert.sameValue(i, 2, 'Second iteration: pre-yield');
assert.sameValue(j, 1, 'Second iteration: post-yield');
assert.sameValue(k, 1, 'Second iteration: post-try');
assert.sameValue(l, 0, 'Second iteration: post-for-of');
controlIterator.next();
assert.sameValue(i, 2, 'Third iteration: pre-yield');
assert.sameValue(j, 2, 'Third iteration: post-yield');
assert.sameValue(k, 2, 'Third iteration: post-try');
assert.sameValue(l, 1, 'Third iteration: post-for-of');