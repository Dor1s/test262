var count = 0;
eval('var static; count += 1;');
assert.sameValue(count, 1);
eval('with ({}) {} count += 1;');
assert.sameValue(count, 2);
eval('unresolvable = null; count += 1;');
assert.sameValue(count, 3);