            function foo () {
                "use strict"; 
                for (var tempIndex in this) {
                    assert.notSameValue(tempIndex, "caller", 'tempIndex');
                } 
            }
foo.call(foo);