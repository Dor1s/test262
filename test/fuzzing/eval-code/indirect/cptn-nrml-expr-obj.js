var x = {};
var y;
assert.sameValue((0,eval)("y = x"),  x, 'AssignmentExpression');
assert.sameValue((0,eval)("x"), x, 'IdentifierReference');