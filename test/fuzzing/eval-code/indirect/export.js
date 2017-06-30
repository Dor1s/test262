assert.throws(SyntaxError, function() {
  (0,eval)('export default null;');
});