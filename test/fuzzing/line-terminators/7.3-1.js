        var test7_3_1, prop;
        eval("test7_3_1\u2028prop = 66;");
assert.sameValue(prop, 66, 'prop');
assert.sameValue((typeof test7_3_1), "undefined", '(typeof test7_3_1)');