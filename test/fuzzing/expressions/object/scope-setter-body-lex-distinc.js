var o = {
  set a(_) {
    let x;
    eval('var x;');
  }
};
assert.throws(SyntaxError, function() {
  o.a = null;
});