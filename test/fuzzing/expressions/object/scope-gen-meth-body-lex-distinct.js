var o = {
  *m() {
    let x;
    eval('var x;');
  }
};
var iter = o.m();
assert.throws(SyntaxError, function() {
  iter.next();
});