{
var result;
var vals = [];
result = [ ...unresolvable ] = vals;
assert.sameValue(result, vals);
}
assert.sameValue(unresolvable.length, 0);