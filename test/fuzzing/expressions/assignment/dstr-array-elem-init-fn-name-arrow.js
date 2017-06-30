var arrow;
var result;
var vals = [];
result = [ arrow = () => {} ] = vals;
assert.sameValue(arrow.name, 'arrow');
verifyNotEnumerable(arrow, 'name');
verifyNotWritable(arrow, 'name');
verifyConfigurable(arrow, 'name');
assert.sameValue(result, vals);