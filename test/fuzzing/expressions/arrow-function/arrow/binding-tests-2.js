function foo(){
    return eval("()=>this");
 }
assert.sameValue(foo()(), this, "This binding initialization was incorrect for arrow capturing this from closure.");