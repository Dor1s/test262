throw "Test262: This statement should not be evaluated.";
var x=0,y=0;
try{
	LABEL1 : do {
		x++;
		throw "gonna leave it";
		y++;
	} while(0);
	$ERROR('#1: throw "gonna leave it" lead to throwing exception');
} catch(e){
	continue LABEL2;
	LABEL2 : do {
		x++;
		y++;
	} while(0);
};