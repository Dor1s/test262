assert.sameValue(eval('var count1 = 2; 1; while (count1 -= 1) { }'), undefined);
assert.sameValue(eval('var count2 = 2; 2; while (count2 -= 1) { 3; }'), 3);