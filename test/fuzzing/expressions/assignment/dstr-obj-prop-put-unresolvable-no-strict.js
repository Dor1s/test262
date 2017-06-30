{
var result;
var vals = {};
result = { x: unresolvable } = vals;
assert.sameValue(result, vals);
}
assert.sameValue(unresolvable, undefined);