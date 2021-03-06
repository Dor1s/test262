let nextCount = 0;
let returnCount = 0;
let x, y;
let iterator = {
  next() {
    nextCount += 1;
    return { value: nextCount, done: nextCount > 1 };
  },
  return() {
    returnCount += 1;
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function * fn() {
  for await ([ x , ...y ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => {
  iter.return().then(() => {
    assert.sameValue(nextCount, 2, 'nextCount');
    assert.sameValue(returnCount, 0, 'returnCount');
    assert.sameValue(x, 1, 'x');
    assert.sameValue(y.length, 0, 'y.length');
  }).then($DONE, $DONE);
}).then($DONE, $DONE);