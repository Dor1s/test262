        eval("var public = 1; 'use strict'; var anotherVariableNotReserveWord = 2;");
assert.sameValue(public, 1, 'public');
assert.sameValue(anotherVariableNotReserveWord, 2, 'anotherVariableNotReserveWord');