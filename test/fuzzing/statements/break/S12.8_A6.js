throw "Test262: This statement should not be evaluated.";
var x=0,y=0;
LABEL1 : do {
    x++;
    (function(){break LABEL1;})();
    y++;
} while(0);