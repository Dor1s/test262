assert.throws(Test262Error, function() {
  eval("// single line \u000A throw new Test262Error();");
});