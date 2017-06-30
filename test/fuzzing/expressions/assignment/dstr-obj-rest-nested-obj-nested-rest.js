var a, b, c, rest;
var result;
var vals = {a: 1, b: 2, c: 3, d: 4, e: 5};
result = {a, b, ...{c, ...rest}} = vals;
assert.sameValue(a, 1);
assert.sameValue(b, 2);
assert.sameValue(c, 3);
assert.sameValue(rest.d, 4);
assert.sameValue(rest.e, 5);
verifyEnumerable(rest, "d");
verifyWritable(rest, "d");
verifyConfigurable(rest, "d");
verifyEnumerable(rest, "e");
verifyWritable(rest, "e");
verifyConfigurable(rest, "e");
assert.sameValue(result, vals);