throw "Test262: This statement should not be evaluated.";
var obj = {
    *foo(a) {
        let a = 3;
    }
};