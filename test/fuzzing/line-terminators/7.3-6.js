        var prop = "66\u2029123";
assert.sameValue(prop, "66\u2029123", 'prop');
assert.sameValue(prop[2], "\u2029", 'prop[2]');
assert.sameValue(prop.length, 6, 'prop.length');