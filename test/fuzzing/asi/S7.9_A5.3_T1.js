throw "Test262: This statement should not be evaluated.";
var x = 1;
x
--;
$ERROR('#1: Check Postfix Decrement Operator for automatic semicolon insertion');