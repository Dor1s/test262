var __in__NotInExpression__, __in__NotInExpression__2, __in__for;
try {
	for((function(){__in__NotInExpression__ = "checked";__in__NotInExpression__2 = "passed";})(); (function(){throw "FirstExpression"})(); (function(){throw "SecondExpression"})()) {
		__in__for="reached";
	}
	$ERROR('#1: (function(){throw "SecondExpression"} lead to throwing exception');
} catch (e) {
	if (e !== "FirstExpression") {
		$ERROR('#1: When for (ExpressionNoIn ; FirstExpression ; SecondExpression) Statement is evaluated first evaluates ExpressionNoIn then FirstExpression');
	}
}
if ((__in__NotInExpression__ !== "checked")&(__in__NotInExpression__2!=="passed")) {
	$ERROR('#2: (__in__NotInExpression__ === "checked")&(__in__NotInExpression__2==="passed")');
}
if (typeof __in__for !== "undefined") {
	$ERROR('#3: typeof __in__for === "undefined". Actual:  typeof __in__for ==='+ typeof __in__for  );
}