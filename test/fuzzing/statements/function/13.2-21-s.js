        function foo () {"use strict";}
assert.throws(TypeError, function() {
            var temp = foo.caller;
});