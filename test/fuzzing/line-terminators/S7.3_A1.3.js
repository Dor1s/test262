var result;
eval("\u2028var\u2028x\u2028=\u20281\u2028; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u2028var\\u2028x\\u2028=\\u20281\\u2028"); result === 1. Actual: ' + (result));
}
eval("\u2028" + "var" + "\u2028" + "x" + "\u2028" + "=" + "\u2028" + "2" + "\u2028; result = x;");
if (result !== 2) {
  $ERROR('#2: eval("\\u2028" + "var" + "\\u2028" + "x" + "\\u2028" + "=" + "\\u2028" + "2" + "\\u2028"); result === 2. Actual: ' + (result));
}