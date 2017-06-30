var result;
try{
	eval("FOR1 : for(var i=1;i<2;i++){FOR1NESTED : for(var j=1;j<2;j++) { continue\u000AFOR1; } while(0);} result = j;");
	if (result!==2) {
		$ERROR('#1: Since LineTerminator(U-000A) between continue and Identifier not allowed continue evaluates without label');
	}
} catch(e){
	$ERROR('#1.1: eval("FOR1 : for(var i=1;i<2;i++){FOR1NESTED : for(var j=1;j<2;j++) { continue\\u000AFOR1; } while(0);}") does not lead to throwing exception');
}
try{
	eval("FOR2 : for(var i=1;i<2;i++){FOR2NESTED : for(var j=1;j<2;j++) { continue\u000DFOR2; } while(0);} result = j;");
	if (result!==2) {
		$ERROR('#2: Since LineTerminator(U-000D) between continue and Identifier not allowed continue evaluates without label');
	}
} catch(e){
	$ERROR('#2.1: eval("FOR2 : for(var i=1;i<2;i++){FOR2NESTED : for(var j=1;j<2;j++) { continue\\u000DFOR2; } while(0);}") does not lead to throwing exception');
}
try{
	eval("FOR3 : for(var i=1;i<2;i++){FOR3NESTED : for(var j=1;j<2;j++) { continue\u2028FOR3; } while(0);} result = j;");
	if (result!==2) {
		$ERROR('#3: Since LineTerminator(U-2028) between continue and Identifier not allowed continue evaluates without label');
	}
} catch(e){
	$ERROR('#3.1: eval("FOR3 : for(var i=1;i<2;i++){FOR3NESTED : for(var j=1;j<2;j++) { continue\\u2028FOR3; } while(0);}") does not lead to throwing exception');
}
try{
	eval("FOR4 : for(var i=1;i<2;i++){FOR4NESTED : for(var j=1;j<2;j++) { continue\u2029FOR4; } while(0);} result = j;");
	if (result!==2) {
		$ERROR('#4: Since LineTerminator(U-2029) between continue and Identifier not allowed continue evaluates without label');
	}
} catch(e){
	$ERROR('#4.1: eval("FOR4 : for(var i=1;i<2;i++){FOR4NESTED : for(var j=1;j<2;j++) { continue\\u2029FOR4; } while(0);}"); does not lead to throwing exception');
}