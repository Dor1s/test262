        function foo () {"use strict";}
        for (var tempIndex in foo) {
            assert.notSameValue(tempIndex, "caller", 'tempIndex');
        }