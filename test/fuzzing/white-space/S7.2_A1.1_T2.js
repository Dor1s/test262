	var  x	=	1	;
if (x !== 1) {
  $ERROR('#1: 	var	x	=	1	; x === 1. Actual: ' + (x));
}
var result;
eval("	var\tx	=\t2	; result = x;");
if (result !== 2) {
  $ERROR('#2: 	var\\tx	=\\t1	; result = x; result === 2. Actual: ' + (result));
}