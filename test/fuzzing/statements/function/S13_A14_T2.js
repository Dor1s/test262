var funcA = eval("function __func\u0041(__arg){return __arg;}; __funcA");
if (typeof funcA !== "function") {
	$ERROR('#1: unicode symbols in function name are allowed');
}