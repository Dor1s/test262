    var fooCalled = false;
    function foo(){ fooCalled = true; } 
    
    var o = { }; 
    Object.defineProperty(o, "bar", {get: function()  {this.barGetter = true; return 42;}, 
                                     set: function(x) {this.barSetter = true; }});
assert.throws(TypeError, function() {
        o.bar( foo() );
        $ERROR("o.bar does not exist!");
});
assert.sameValue(fooCalled, true, 'fooCalled');
assert.sameValue(o.barGetter, true, 'o.barGetter');
assert.sameValue(o.barSetter, undefined, 'o.barSetter');