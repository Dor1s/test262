var global = this;
function testcase() {
var my_eval = eval;
assert.sameValue(my_eval("\"use strict\";\nthis"), this);
}
testcase();