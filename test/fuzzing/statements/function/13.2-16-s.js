            var foo = new Function("'use strict'; for (var tempIndex in this) {assert.notSameValue(tempIndex, 'arguments', 'tempIndex');}");
            foo.call(foo);