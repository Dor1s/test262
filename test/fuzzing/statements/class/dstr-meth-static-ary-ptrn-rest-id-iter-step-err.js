var first = 0;
var second = 0;
var iter = function*() {
  first += 1;
  throw new Test262Error();
  second += 1;
}();
class C {
  static method([...x]) {}
};
assert.throws(Test262Error, function() {
  C.method(iter);
});
iter.next();
assert.sameValue(first, 1);
assert.sameValue(second, 0, 'Iterator is closed following abrupt completion.');