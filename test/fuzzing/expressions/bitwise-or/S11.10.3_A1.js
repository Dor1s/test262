if ((eval("0\u0009|\u00091")) !== 1) {
  $ERROR('#1: (0\\u0009|\\u00091) === 1');
}
if ((eval("0\u000B|\u000B1")) !== 1) {
  $ERROR('#2: (0\\u000B|\\u000B1) === 1');  
}
if ((eval("0\u000C|\u000C1")) !== 1) {
  $ERROR('#3: (0\\u000C|\\u000C1) === 1');
}
if ((eval("0\u0020|\u00201")) !== 1) {
  $ERROR('#4: (0\\u0020|\\u00201) === 1');
}
if ((eval("0\u00A0|\u00A01")) !== 1) {
  $ERROR('#5: (0\\u00A0|\\u00A01) === 1');
}
if ((eval("0\u000A|\u000A1")) !== 1) {
  $ERROR('#6: (0\\u000A|\\u000A1) === 1');  
}
if ((eval("0\u000D|\u000D1")) !== 1) {
  $ERROR('#7: (0\\u000D|\\u000D1) === 1');
}
if ((eval("0\u2028|\u20281")) !== 1) {
  $ERROR('#8: (0\\u2028|\\u20281) === 1');
}
if ((eval("0\u2029|\u20291")) !== 1) {
  $ERROR('#9: (0\\u2029|\\u20291) === 1');
}
if ((eval("0\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029|\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20291")) !== 1) {
  $ERROR('#10: (0\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029|\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === 1');
}