var x;
try {
  eval("x = 1; x\u000A++");
  $ERROR('#1.1: eval("x = 1; x\\u000A++") must throw a SyntaxError. Actual: ' + (eval("x = 1; x\u000A++")));
} catch (e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#1.2: eval("x = 1; x\\u000A++") must throw a SyntaxError. Actual: ' + (e));
  }  
}