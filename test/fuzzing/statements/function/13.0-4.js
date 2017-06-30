        var obj = {};
        obj.tt = { len: 10 };
assert.throws(SyntaxError, function() {
            eval("function obj.tt.ss() {};");
});