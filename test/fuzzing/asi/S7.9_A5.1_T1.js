throw "Test262: This statement should not be evaluated.";
var x = 0;
x
++;
$ERROR('#1: Check Postfix Increment Operator for automatic semicolon insertion');