var x;
x = 1;
if ((eval("x\u0009&=\u00091")) !== 1) {
  $ERROR('#1: x = 1; (x\\u0009&=\\u00091) === 1');
}
x = 1;
if ((eval("x\u000B&=\u000B1")) !== 1) {
  $ERROR('#2: x = 1; (x\\u000B&=\\u000B1) === 1');  
}
x = 1;
if ((eval("x\u000C&=\u000C1")) !== 1) {
  $ERROR('#3: x = 1; (x\\u000C&=\\u000C1) === 1');
}
x = 1;
if ((eval("x\u0020&=\u00201")) !== 1) {
  $ERROR('#4: x = 1; (x\\u0020&=\\u00201) === 1');
}
x = 1;
if ((eval("x\u00A0&=\u00A01")) !== 1) {
  $ERROR('#5: x = 1; (x\\u00A0&=\\u00A01) === 1');
}
x = 1;
if ((eval("x\u000A&=\u000A1")) !== 1) {
  $ERROR('#6: x = 1; (x\\u000A&=\\u000A1) === 1');  
}
x = 1;
if ((eval("x\u000D&=\u000D1")) !== 1) {
  $ERROR('#7: x = 1; (x\\u000D&=\\u000D1) === 1');
}
x = 1;
if ((eval("x\u2028&=\u20281")) !== 1) {
  $ERROR('#8: x = 1; (x\\u2028&=\\u20281) === 1');
}
x = 1;
if ((eval("x\u2029&=\u20291")) !== 1) {
  $ERROR('#9: x = 1; (x\\u2029&=\\u20291) === 1');
}
x = 1;
if ((eval("x\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029&=\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20291")) !== 1) {
  $ERROR('#10: x = 1; (x\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029&=\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === 1');
}