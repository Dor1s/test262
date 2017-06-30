function __func(){
    x = 1;
    return x;
}
try {
	x=x;
	$ERROR('#0: "x=x" lead to throwing exception');
} catch (e) {
    if (e instanceof Test262Error) throw e;
}
try{
    var __x=__func();
} catch(e){
    $ERROR('#1: var __x=__func() does not lead to throwing exception. Actual: exception is '+e);
}
if (__x !== 1) {
	$ERROR('#2: __x === 1. Actual: __x ==='+__x);
}
if (x !== 1) {
	$ERROR('#3: x === 1. Actual: x ==='+x);
}