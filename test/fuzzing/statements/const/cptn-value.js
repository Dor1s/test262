assert.sameValue(
  eval('const test262id1 = 1;'), undefined, 'Single declaration'
);
assert.sameValue(
  eval('const test262id2 = 2, test262id3 = 3;'),
  undefined,
  'Multiple declarations'
);
assert.sameValue(eval('4; const test262id5 = 5;'), 4);
assert.sameValue(eval('6; let test262id7 = 7, test262id8 = 8;'), 6);