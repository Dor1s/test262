        var funObj = new Function("a", "eval('public = 1;'); 'use strict'; anotherVariable = 2;");
        funObj();
assert.sameValue(public, 1, 'public');
assert.sameValue(anotherVariable, 2, 'anotherVariable');