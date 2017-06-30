assert.throws(SyntaxError, function() {
    eval('var x = "a\\03z";');
});