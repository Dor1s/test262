        var test7_3_2, prop;
        eval("test7_3_2\u2029prop = 66;");
assert.sameValue(prop, 66, 'prop');
assert.sameValue((typeof test7_3_2), "undefined", '(typeof test7_3_2)');