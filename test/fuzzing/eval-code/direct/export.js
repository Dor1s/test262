assert.throws(SyntaxError, function() {
  eval('export default null;');
});