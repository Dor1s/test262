var count = 0;
(0,eval)('var static; count += 1;');
assert.sameValue(count, 1);
(0,eval)('with ({}) {} count += 1;');
assert.sameValue(count, 2);
(0,eval)('unresolvable = null; count += 1;');
assert.sameValue(count, 3);