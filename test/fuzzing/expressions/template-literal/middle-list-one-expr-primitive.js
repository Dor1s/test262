assert.sameValue(`${0} ${5} bar`, '0 5 bar', 'number value');
assert.sameValue(`${0} ${'string'} bar`, '0 string bar', 'string value');