var result;
eval("\u000Dvar\u000Dx\u000D=\u000D1\u000D; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u000Dvar\\u000Dx\\u000D=\\u000D1\\u000D"); result === 1. Actual: ' + (result));
}
eval("\u000D" + "var" + "\u000D" + "x" + "\u000D" + "=" + "\u000D" + "2" + "\u000D; result = x;");
if (result !== 2) {
  $ERROR('#2: eval("\\u000D" + "var" + "\\u000D" + "x" + "\\u000D" + "=" + "\\u000D" + "2" + "\\u000D"); result === 2. Actual: ' + (result));
}
eval("\rvar\rx\r=\r3\r; result = x;");
if (result !== 3) {
  $ERROR('#3: eval("\\rvar\\rx\\r=\\r3\\r"); result === 3. Actual: ' + (result));
}
eval("\r" + "var" + "\r" + "x" + "\r" + "=" + "\r" + "4" + "\r; result = x;");
if (result !== 4) {
  $ERROR('#4: eval("\\r" + "var" + "\\r" + "x" + "\\r" + "=" + "\\r" + "4" + "\\r"); result === 4. Actual: ' + (result));
}
eval("\u000D" + "var" + "\r" + "x" + "\u000D" + "=" + "\r" + "5" + "\u000D; result = x;");
if (result !== 5) {
  $ERROR('#5: eval("\\u000D" + "var" + "\\r" + "x" + "\\u000D" + "=" + "\\r" + "5" + "\\u000D"); result === 5. Actual: ' + (result));
}