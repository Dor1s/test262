var result;
eval("\u00A0var x\u00A0= 1\u00A0; result = x;");
if (result !== 1) {
  $ERROR('#1: eval("\\u00A0var x\\u00A0= 1\\u00A0; result = x;"); result === 1. Actual: ' + (result));
}
 var x = 2 ;
if (x !== 2) {
  $ERROR('#2:  var x = 1 ; x === 2. Actual: ' + (x));
}