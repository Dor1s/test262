throw "Test262: This statement should not be evaluated.";
arr = [1,2,3,4,5];
for(1 in arr;1;) {
    break;
}