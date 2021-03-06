    var o = { }; 
    Object.defineProperty(o, "bar", {get: function()  {this.barGetter = true; return 42;}, 
                                     set: function(x) {this.barSetter = true; }});
assert.throws(TypeError, function() {
        o.foo( o["bar"] );
        $ERROR("o.foo does not exist!");
});
assert.sameValue(o.barGetter, true, 'o.barGetter');
assert.sameValue(o.barSetter, undefined, 'o.barSetter');