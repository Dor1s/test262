throw "Test262: This statement should not be evaluated.";
var x = 0;
if (false) {x = 1};
else x = -1
if (x !== -1) {
  $ERROR('#1: Check If Statement for automatic semicolon insertion');
}