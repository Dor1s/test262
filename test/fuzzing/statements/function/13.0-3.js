        var obj = {};
assert.throws(SyntaxError, function() {
            eval("function obj.tt() {};");
});