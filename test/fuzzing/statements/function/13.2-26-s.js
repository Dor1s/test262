        function foo () {"use strict";}
assert.throws(TypeError, function() {
            foo.arguments = 41;
});