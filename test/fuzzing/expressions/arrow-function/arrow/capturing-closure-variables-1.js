var a;
function foo(){
    eval("a = 10");
    return ()=>a;
 }
assert.sameValue(foo()(), 10, "Closure variable was captured incorrectly.");