var [{ x, y, z } = { x: 44, y: 55, z: 66 }] = [{ x: 11, y: 22, z: 33 }];
assert.sameValue(x, 11);
assert.sameValue(y, 22);
assert.sameValue(z, 33);