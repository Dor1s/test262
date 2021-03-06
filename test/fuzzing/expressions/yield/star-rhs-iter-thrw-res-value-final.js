var quickIter = {};
var iter, exprValue, throwReceived;
quickIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    throw: function(x) {
      throwReceived = x;
      return { done: true, value: 3333 };
    }
  };
};
function* g() {
  exprValue = yield * quickIter;
}
iter = g();
iter.next();
iter.throw(2222);
assert.sameValue(throwReceived, 2222);
assert.sameValue(exprValue, 3333);