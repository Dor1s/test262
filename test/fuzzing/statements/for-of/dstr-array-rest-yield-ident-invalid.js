throw "Test262: This statement should not be evaluated.";
var x = {};
for ([...x[yield]] of [[]]) ;