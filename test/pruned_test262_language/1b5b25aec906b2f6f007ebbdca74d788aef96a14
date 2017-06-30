    function foo() {};
    Object.defineProperty(foo.prototype, "bar", {value: "unwritable"}); 
    
    var o = new foo(); 
assert.throws(TypeError, function() {
        o.bar = "overridden";
});
assert.sameValue(o.bar, "unwritable", 'o.bar');