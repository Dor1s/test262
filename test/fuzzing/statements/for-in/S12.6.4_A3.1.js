var __str, __evaluated, arr;
__str="";
__evaluated = eval("for(var ind in (arr=[2,1,4,3]))__str+=arr[ind]");
if (__evaluated !== __str) {
	$ERROR('#1: __evaluated === __str. Actual:  __evaluated ==='+ __evaluated  );
}
if (!( (__str.indexOf("2")!==-1)&&(__str.indexOf("1")!==-1)&&(__str.indexOf("4")!==-1)&&(__str.indexOf("3")!==-1) )) {
	$ERROR('#2: (__str.indexOf("2")!==-1)&&(__str.indexOf("1")!==-1)&&(__str.indexOf("4")!==-1)&&(__str.indexOf("3")!==-1)');
}