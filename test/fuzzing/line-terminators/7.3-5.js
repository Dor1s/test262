        var prop = "66\u2028123";
assert.sameValue(prop, "66\u2028123", 'prop');
assert.sameValue(prop[2], "\u2028", 'prop[2]');
assert.sameValue(prop.length, 6, 'prop.length');