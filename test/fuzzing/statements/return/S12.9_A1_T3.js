throw "Test262: This statement should not be evaluated.";
try {
    return 1;
} catch(e){
    return 1;
}