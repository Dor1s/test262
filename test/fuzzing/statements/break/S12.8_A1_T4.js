throw "Test262: This statement should not be evaluated.";
LABEL : x=3.14;
{
    var x=1;
    break LABEL;
    var y=2;
}