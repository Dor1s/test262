var result;
eval("\u2029var\u2029x\u2029=\u20291\u2029; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u2029var\\u2029x\\u2029=\\u20291\\u2029"); result === 1. Actual: ' + (result));
}
eval("\u2029" + "var" + "\u2029" + "x" + "\u2029" + "=" + "\u2029" + "2" + "\u2029; result = x;");
if (result !== 2) {
  $ERROR('#2: eval("\\u2029" + "var" + "\\u2029" + "x" + "\\u2029" + "=" + "\\u2029" + "2" + "\\u2029"); result === 2. Actual: ' + (result));
}