if (eval("+\u00091") !== 1) {
  $ERROR('#1: +\\u00091 === 1');
}
if (eval("+\u000B1") !== 1) {
  $ERROR('#2: +\\u000B1 === 1');  
}
if (eval("+\u000C1") !== 1) {
  $ERROR('#3: +\\u000C1 === 1');
}
if (eval("+\u00201") !== 1) {
  $ERROR('#4: +\\u0020 === 1');
}
if (eval("+\u00A01") !== 1) {
  $ERROR('#5: +\\u00A01 === 1');
}
if (eval("+\u000A1") !== 1) {
  $ERROR('#6: +\\u000A1 === 1');  
}
if (eval("+\u000D1") !== 1) {
  $ERROR('#7: +\\u000D1 === 1');
}
if (eval("+\u20281") !== 1) {
  $ERROR('#8: +\\u20281 === 1');
}
if (eval("+\u20291") !== 1) {
  $ERROR('#9: +\\u20291 === 1');
}
if (eval("+\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20291") !== 1) {
  $ERROR('#10: +\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291 === 1');
}