var d = delete JSON.stringify;
assert.sameValue(d, true, 'd');
assert.sameValue(JSON.stringify, undefined, 'JSON.stringify');