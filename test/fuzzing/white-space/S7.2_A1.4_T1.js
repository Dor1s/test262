var result;
eval("\u0020var\u0020x\u0020=\u00201\u0020; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u0020var\\u0020x\\u0020=\\u00201\\u0020; result = x;"); result === 1;');
}
eval("\u0020" + "var" + "\u0020" + "x" + "\u0020" + "=" + "\u0020" + "2" + "\u0020; result = x;");
if (result !== 2) {
  $ERROR('#2: eval("\\u0020" + "var" + "\\u0020" + "x" + "\\u0020" + "=" + "\\u0020" + "2" + "\\u0020; result = x;"); result === 2. Actual: ' + (result));
}