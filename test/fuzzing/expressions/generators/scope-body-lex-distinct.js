var g = function*() {
  let x;
  eval('var x;');
};
var iter = g();
assert.throws(SyntaxError, function() {
  iter.next();
});