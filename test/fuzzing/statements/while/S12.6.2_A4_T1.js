var __in__do__before__break, __in__do__after__break;
while(1===1){
    __in__do__before__break="reached"; 
    break;
     __in__do__after__break="where am i";
}
if (__in__do__before__break !== "reached") {
	$ERROR('#1: __in__do__before__break === "reached". Actual:  __in__do__before__break ==='+ __in__do__before__break  );
}
if (typeof __in__do__after__break !== "undefined") {
	$ERROR('#2: typeof __in__do__after__break === "undefined". Actual:  typeof __in__do__after__break ==='+ typeof __in__do__after__break  );
}