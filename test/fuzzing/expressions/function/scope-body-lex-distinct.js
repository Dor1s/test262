assert.throws(SyntaxError, function() {
  let x;
  eval('var x;');
});