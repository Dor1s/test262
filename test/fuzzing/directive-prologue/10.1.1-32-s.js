        var funObj = new Function("a", "eval('public = 1;'); anotherVariable = 2; 'use strict';");
        funObj();
assert.sameValue(public, 1, 'public');
assert.sameValue(anotherVariable, 2, 'anotherVariable');