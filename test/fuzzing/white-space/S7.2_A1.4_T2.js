var result;
eval("\u0020var x\u0020= 1\u0020; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u0020var x\\u0020= 1\\u0020; result = x;"); result === 1. Actual: ' + (result));
}
 var x = 2 ;
if (x !== 2) {
  $ERROR('#2:  var x = 2 ; x === 2. Actual: ' + (x));
}