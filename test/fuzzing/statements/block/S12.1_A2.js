assert.throws(ReferenceError, function() {
	{
		x();
	}
});
try {
    throw "catchme";	
    $ERROR('#2: throw "catchme" lead to throwing exception');
} catch (e) {
	if (e!=="catchme") {
		$ERROR('#2.1: Exception === "catchme". Actual:  Exception ==='+ e  );
	}
}