function f_10_6_1_gs(){
    return arguments.callee;
}
assert.throws(TypeError, function() {
    f_10_6_1_gs();
});