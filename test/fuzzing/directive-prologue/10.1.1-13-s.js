        eval("var public = 1; var anotherVariableNotReserveWord = 2; 'use strict';");
assert.sameValue(public, 1, 'public');
assert.sameValue(anotherVariableNotReserveWord, 2, 'anotherVariableNotReserveWord');