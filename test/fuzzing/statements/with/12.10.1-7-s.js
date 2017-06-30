assert.throws(SyntaxError, function() {
    eval("var f = function () {\
                var o = {}; \
                with (o) {}; \
             }\
        ");
});