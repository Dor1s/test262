var evaluatedArg = false;
var obj = {
  method() {
    // Early errors restricting the usage of SuperCall necessitate the use of
    // `eval`.
    eval('super(evaluatedArg = true);');
  }
}
assert.throws(SyntaxError, function() {
  obj.method();
});
assert.sameValue(
  evaluatedArg, false, 'did not perform ArgumentsListEvaluation'
);