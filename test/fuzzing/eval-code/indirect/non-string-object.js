var x = {};
assert.sameValue((0,eval)(x), x, 'ordinary object');
x = new Number(1);
assert.sameValue((0,eval)(x), x, 'Number object');
x = new Boolean(true);
assert.sameValue((0,eval)(x), x, 'Boolean object');
x = new String("1+1");
assert.sameValue((0,eval)(x), x, 'String object');