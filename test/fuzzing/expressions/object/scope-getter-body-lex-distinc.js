var o = {
  get a() {
    let x;
    eval('var x;');
  }
};
assert.throws(SyntaxError, function() {
  o.a;
});