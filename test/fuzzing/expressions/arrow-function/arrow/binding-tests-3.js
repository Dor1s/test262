function foo(){
    return ()=>eval("this");
 }
assert.sameValue(eval("foo()()"), this, "This binding initialization was incorrect for arrow capturing this from closure.");