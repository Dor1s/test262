    var fooCalled = false;
    var foo = function (){ fooCalled = true; } 
    
    var o = { }; 
assert.throws(TypeError, function() {
        o.bar( foo() );
        $ERROR("o.bar does not exist!");
});
assert.sameValue(fooCalled, true, 'fooCalled');