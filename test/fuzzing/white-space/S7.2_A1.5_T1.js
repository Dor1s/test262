var result;
eval("\u00A0var\u00A0x\u00A0=\u00A01\u00A0; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u00A0var\\u00A0x\\u00A0=\\u00A01\\u00A0; result = x;"); result === 1. Actual: ' + (result));
}
eval("\u00A0" + "var" + "\u00A0" + "x" + "\u00A0" + "=" + "\u00A0" + "2" + "\u00A0; result = x;");
if (result !== 2) {
  $ERROR('#2: eval("\\u00A0" + "var" + "\\u00A0" + "x" + "\\u00A0" + "=" + "\\u00A0" + "2" + "\\u00A0; result = x;"); result === 2. Actual: ' + (result));
}