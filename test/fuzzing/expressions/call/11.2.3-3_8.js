    var fooCalled = false;
    function foo(){ fooCalled = true; } 
assert.throws(TypeError, function() {
        this.bar( foo() );
        $ERROR("this.bar does not exist!");
});
assert.sameValue(fooCalled, true, 'fooCalled');