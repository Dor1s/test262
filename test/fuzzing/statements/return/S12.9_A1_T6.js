throw "Test262: This statement should not be evaluated.";
do {
    var x=1;
    return;
    var y=2;
} while(0);