assert.sameValue(`foo ${5} bar`, 'foo 5 bar', 'number value');
assert.sameValue(`foo ${'string'} bar`, 'foo string bar', 'string value');