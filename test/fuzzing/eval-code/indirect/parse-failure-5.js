var value;
try {
  value = (0,eval)("return;");
  $ERROR('#1.1: return must throw SyntaxError. Actual: ' + value);
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#1.2: return must throw SyntaxError. Actual: ' + e);
  }
}
assert.throws(SyntaxError, function() {
  (0,eval)("return;");
});