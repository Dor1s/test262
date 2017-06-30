var base = +Infinity;
var exponents = [];
exponents[3] = Infinity;
exponents[2] = 1.7976931348623157E308; //largest (by module) finite number
exponents[1] = 1;
exponents[0] = 0.000000000000001;
for (var i = 0; i < exponents.length; i++) {
	if (base ** exponents[i] !== +Infinity) {
		$ERROR("(" + base + " ** " + exponents[i] + ") !== +Infinity");
	}
}