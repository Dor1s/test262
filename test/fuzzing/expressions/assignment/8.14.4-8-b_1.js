    function foo() {};
    Object.defineProperty(foo.prototype, "bar", {value: "unwritable"}); 
    
    var o = new foo(); 
    o.bar = "overridden"; 
assert.sameValue(o.hasOwnProperty("bar"), false, 'o.hasOwnProperty("bar")');
assert.sameValue(o.bar, "unwritable", 'o.bar');