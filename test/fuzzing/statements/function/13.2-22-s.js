        function foo () {"use strict";}
assert.throws(TypeError, function() {
            foo.caller = 41;
});