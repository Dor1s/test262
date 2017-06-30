assert.throws(SyntaxError, function() {
            eval("var obj = {}; obj['get'] = function (a) { with(a){} };  ");
});