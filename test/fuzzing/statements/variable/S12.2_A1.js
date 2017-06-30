try {
	__x = __x;
    __y = __x ? "good fellow" : "liar"; // __y assigned to "liar" since __x undefined
    __z = __z === __x ? 1 : 0; // __z assigned to 1 since both __x and __z are undefined
} catch (e) {
	$ERROR('#1: Using declarated variable before it declaration is admitted');
}
assert.throws(ReferenceError, function() {
    __something__undefined = __something__undefined;
});
if ((__y !== "liar")&(__z !== 1)) {
	$ERROR('#3: (__y === "liar") and (__z === 1). Actual:  __y ==='+__y+' and __z ==='+__z  );
}
var __x, __y = true, __z = __y ? "smeagol" : "golum";
if (!__y&!(__z = "smeagol")) {
	$ERROR('#4: A variable with an Initialiser is assigned the value of its AssignmentExpression when the VariableStatement is executed');
}