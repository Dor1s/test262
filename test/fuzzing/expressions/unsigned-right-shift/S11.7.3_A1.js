if (eval("-4\u0009>>>\u00091") !== 2147483646) {
  $ERROR('#1: -4\\u0009>>>\\u00091 === 2147483646');
}
if (eval("-4\u000B>>>\u000B1") !== 2147483646) {
  $ERROR('#2: -4\\u000B>>>\\u000B1 === 2147483646');  
}
if (eval("-4\u000C>>>\u000C1") !== 2147483646) {
  $ERROR('#3: -4\\u000C>>>\\u000C1 === 2147483646');
}
if (eval("-4\u0020>>>\u00201") !== 2147483646) {
  $ERROR('#4: -4\\u0020>>>\\u00201 === 2147483646');
}
if (eval("-4\u00A0>>>\u00A01") !== 2147483646) {
  $ERROR('#5: -4\\u00A0>>>\\u00A01 === 2147483646');
}
if (eval("-4\u000A>>>\u000A1") !== 2147483646) {
  $ERROR('#6: -4\\u000A>>>\\u000A1 === 2147483646');  
}
if (eval("-4\u000D>>>\u000D1") !== 2147483646) {
  $ERROR('#7: -4\\u000D>>>\\u000D1 === 2147483646');
}
if (eval("-4\u2028>>>\u20281") !== 2147483646) {
  $ERROR('#8: -4\\u2028>>>\\u20281 === 2147483646');
}
if (eval("-4\u2029>>>\u20291") !== 2147483646) {
  $ERROR('#9: -4\\u2029>>>\\u20291 === 2147483646');
}
if (eval("-4\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029>>>\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20291") !== 2147483646) {
  $ERROR('#10: -4\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029>>>\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291 === 2147483646');
}