eval("// single line comment\u000A");
var x = 0;
eval("// single line comment\u000A x = 1;");
if (x !== 1) {
  $ERROR('#1: var x = 0; eval("// single line comment\\u000A x = 1;"); x === 1. Actual: ' + (x));
}