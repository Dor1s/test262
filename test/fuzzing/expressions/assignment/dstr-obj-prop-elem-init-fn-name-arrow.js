var arrow;
var result;
var vals = {};
result = { x: arrow = () => {} } = vals;
assert.sameValue(arrow.name, 'arrow');
verifyNotEnumerable(arrow, 'name');
verifyNotWritable(arrow, 'name');
verifyConfigurable(arrow, 'name');
assert.sameValue(result, vals);