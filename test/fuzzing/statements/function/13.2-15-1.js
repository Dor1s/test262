var fun = function (x, y) { };
assert(fun.hasOwnProperty("length"));
assert.sameValue(fun.length, 2);
verifyNotEnumerable(fun, "length");
verifyNotWritable(fun, "length");
verifyConfigurable(fun, "length");