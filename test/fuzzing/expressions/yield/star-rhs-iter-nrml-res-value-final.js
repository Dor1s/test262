var quickIter = {};
var exprValue, nextReceived, done, iter;
quickIter[Symbol.iterator] = function() {
  return {
    next: function(x) {
      nextReceived = x;
      return {
        done: done,
        value: 3333
      };
    }
  };
};
function* g() {
  exprValue = yield * quickIter;
}
done = true;
iter = g();
iter.next(4444);
assert.sameValue(
  nextReceived, undefined, 'received value (previously-exhausted iterator)'
);
assert.sameValue(exprValue, 3333, 'expression value (previously-exhausted iterator)');
done = false;
exprValue = null;
iter = g();
iter.next(2222);
done = true;
iter.next(5555);
assert.sameValue(nextReceived, 5555, 'received value');
assert.sameValue(exprValue, 3333, 'expression value');