assert.throws(ReferenceError, function() {
	x=x;
});
eval("var x");
try{
	x=x;
}catch(e){
	$ERROR('#2: VariableDeclaration inside Eval statement is initialized when program reaches the eval statement '+e.message);
};