assert.sameValue(`${0} ${1} ${5} bar`, '0 1 5 bar', 'number value');
assert.sameValue(`${0} ${1} ${'string'} bar`, '0 1 string bar', 'string value');