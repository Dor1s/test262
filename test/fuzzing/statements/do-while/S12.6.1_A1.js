var __in__do;
do __in__do=1; while ( false );
if (__in__do!==1) {
	$ERROR('#1: the inner statement of a do-loop should be evaluated before the expression: false evaluates to false');
}
do __in__do=2; while ( 0 );
if (__in__do!==2) {
	$ERROR('#2: the inner statement of a do-loop should be evaluated before the expression: 0 evaluates to false');
}
do __in__do=3; while ( "" );
if (__in__do!==3) {
	$ERROR('#3: the inner statement of a do-loop should be evaluated before the expression: "" evaluates to false');
}